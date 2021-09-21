const router = require('express').Router();
const NodeRSA = require('node-rsa');
const { v4: uuid } = require('uuid');

const { getUser, setUser, setUserTokenObj } = require('../data/usersData');
const { readPrivateKey } = require('../inMemory/cryptoPairs');

// session will expire one hour after sign in
const generateExpirationDate = () => {
    const now = new Date();
    now.setHours(now.getHours() + 1);
    return now.getTime();
}

router.post('/sign-in', async (req, res, next) => {
    try {
        const { email, encryptionId, encryptedPassword } = req.body;

        const privateKey = readPrivateKey(encryptionId);
        if (!privateKey) {
            res.json({ isSuccess: false, message: 'could not get private rsa key' });
        }
        const rsa = new NodeRSA(privateKey);
        const decryptedPassword = rsa.decrypt(encryptedPassword, 'utf8');

        const result = await getUser(email, decryptedPassword);
        if (result) {
            const { password, ...rest } = result;
            const token = uuid();
            const expiration = generateExpirationDate();
            const setResult = setUserTokenObj({ token, expiration });
            if (setResult) {
                res.json({ isSuccess: true, user: { token, expiration, ...rest } });
            } else {
                res.json({ isSuccess: false, message: 'could not set token object' });
            }
        } else {
            res.json({ isSuccess: false, message: 'invalid credentials' });
        }
    } catch (err) {
        next(err);
    }
});

router.post('/sign-up', async (req, res, next) => {
    try {
        const { email, encryptionId, encryptedPassword } = req.body;

        const privateKey = readPrivateKey(encryptionId);
        if (!privateKey) {
            res.json({ isSuccess: false, message: 'could not get private rsa key' });
        }
        const rsa = new NodeRSA(privateKey);
        const password = rsa.decrypt(encryptedPassword, 'utf8');

        const result = await setUser(email, password);
        const emailResult = await emailService.sendEmail({
            to: email,
            subject: 'Account activation',
            html: emailTemplates.accountActivation(result)
        });
        if (result && emailResult.accepted.includes(email)) {
            res.json({ isSuccess: true });
        } else {
            res.json({ isSuccess: false, message: 'could not create user' });
        }
    } catch (err) {
        next(err);
    }
});

router.get('/activate/:userId', async (req, res, next) => {
    try {
        const { userId } = req.params;
        const isActivated = await activateUser(userId);
        if (isActivated) {
            res.send('<h3 style="text-align: center; margin-top: 5vh;">Account has been activated successfully!</h3>');
        } else {
            res.status(400).send('could not activate account');
        }
    } catch (err) {
        next(err);
    }
});

module.exports = router;
