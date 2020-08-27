function logger(err, req, res, next) {
    console.log( `
    [API SERVER LOG]:
    DATE: ${new Date().toISOString()}
    METHOD: ${req.method}
    URL: ${req.url}
    ERROR: ${err.stack}
    <------------------------------------->
    ` )
    next()
}

module.exports = {
    logger
}