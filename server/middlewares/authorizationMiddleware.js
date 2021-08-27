const { getUserById } = require("../data/usersData");

function authorize(roles = []) {
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return [
        async (req, res, next) => {
            const token = req.headers['x-authrz'];
            if (token) {
                const user = await getUserById(token);
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
    ];
};

module.exports = authorize;
