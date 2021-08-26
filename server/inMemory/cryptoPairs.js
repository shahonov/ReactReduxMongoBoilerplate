const cryptoPairs = {};

const writePrivateKey = (encryptionId, privateKey) => {
    if (!cryptoPairs[encryptionId]) {
        cryptoPairs[encryptionId] = privateKey;
        return true;
    } else {
        return false;
    }
}

const readPrivateKey = (encryptionId) => {
    if (cryptoPairs[encryptionId]) {
        const result = cryptoPairs[encryptionId];
        delete cryptoPairs[encryptionId];
        return result;
    } else {
        return undefined;
    }
}

module.exports = {
    writePrivateKey,
    readPrivateKey,
}
