const mongoCluster = {
    appDbUrl: process.env.DB_CON_STR
}

module.exports = {
    dbUrl: mongoCluster.appDbUrl,
}
