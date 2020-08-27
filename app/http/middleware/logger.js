function logger(req, res, next) {
    console.log( `[API SERVER LOG]:\n DATE: ${new Date().toISOString()}\n METHOD: ${req.method}\n URL: ${req.url}\n<------------------------------------->` )
    next()
}

module.exports = {
    logger
}