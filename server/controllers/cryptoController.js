const router = require('express').Router();
const NodeRSA = require('node-rsa');

const { v4: uuidv4 } = require('uuid');
const { writePrivateKey } = require('../inMemory/cryptoPairs');

router.get('/public-rsa-key', async (req, res) => {
    const rsa = new NodeRSA({ b: 512 });
    const publicRSAKey = rsa.exportKey('pkcs1-public');
    const privateRSAKey = rsa.exportKey('pkcs1-private');
    const encryptionId = uuidv4();
    if (writePrivateKey(encryptionId, privateRSAKey)) {
        res.json({ publicRSAKey, encryptionId });
    } else {
        res.status(400).send('error writing private rsa key');
    }
})

module.exports = router;
