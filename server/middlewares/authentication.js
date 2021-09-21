function authenticate(req, res, next) {
    const token = req.headers['x-auth'];
    if (token) {
        const user = await getUserByToken(token);
        if (!user) {
            return res.status(401).send('You are not authorized to perform this action');
        }
        if (roles.includes(user.role)) {
            next();
        } else {
            return res.status(401).send('You are not authorized to perform this action');
        }
    } else {
        return res.status(401).send('You are not authorized to perform this action');
    }
}

module.exports = authenticate;
