function isValid(user) {
    return Boolean(user.username && user.password && typeof user.password === "string")
}

function isValidPass(pass) {
    return Boolean(pass && typeof pass === "string")
}

module.exports = {
    isValid,
    isValidPass
}