const { getDb, ObjectID } = require("./db")

const name = 'users';

const getUser = async (email, password) => {
    const result = await getDb()
        .collection(name)
        .findOne({ email, password });

    return result;
}

const isUserExists = async email => {
    const result = await getDb()
        .collection(name)
        .findOne({ email });

    return result;
}

const setUser = async (email, password) => {
    const user = await isUserExists(email);
    if (user) {
        throw Error('user with given email already exists');
    }

    const result = await getDb()
        .collection(name)
        .insertOne({ email, password, role: 'user' });

    return result.insertedId;
}

const setUserTokenObj = async (userId, tokenObj) => {
    const result = await getDb()
        .collection(name)
        .updateOne(
            { _id: ObjectID(userId) },
            { $set: { tokenObj } }
        )

    return result.modifiedCount > 0;
}

const getUserByToken = async token => {
    const result = await getDb()
        .collection(name)
        .findOne({ token });

    return result;
}

const activateUser = async userId => {
    const result = await getDb()
        .collection(name)
        .updateOne(
            { _id: ObjectID(userId) },
            {
                $set: {
                    isActivated: true
                }
            }
        )

    return result.modifiedCount > 0;
}

module.exports = {
    getUser,
    setUser,
    activateUser,
    getUserByToken,
    setUserTokenObj,
}
