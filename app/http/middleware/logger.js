function logger(req, res, next) {
    console.log( `
    [API SERVER LOG]:
    DATE: ${new Date().toISOString()}
    METHOD: ${req.method}
    URL: ${req.url}
    <------------------------------------->
    ` )
    next()
}

module.exports = {
    logger
}