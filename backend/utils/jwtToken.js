// Create and send token and save in the cookie.
const sendToken = (user, statusCode, res) => {

    // Create Jwt token
    console.log("Inside sendToken");
    const token = user.getJwtToken();

    console.log("Inside sendToken", token, process.env.COOKIES_EXPIRES_TIME);

    console.log("Inside sendToken", process.env.COOKIES_EXPIRES_TIME * 24 * 60 * 60 * 1000);

    console.log("Inside sendToken", Date.now() + process.env.COOKIES_EXPIRES_TIME* 24 * 60 * 60 * 1000);

    // Options for cookie
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIES_EXPIRES_TIME * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }


    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token,
        user
    })

}

module.exports = sendToken;