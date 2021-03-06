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

const getUserById = async _id => {
    const result = await getDb()
        .collection(name)
        .findOne({ _id: ObjectID(_id) });

    return result;
}

module.exports = {
    getUser,
    setUser,
    getUserById
}
