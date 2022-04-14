const bcrypts = require('server/helpers/bcrypt');
const jwts = require('server/helpers/jwts');
const helpers = require('../helpers');
const ErrorResponse = require('../utils/errorResponse');

//send verify email
const sendVerifyEmail = async(user, req, res, next) => {
    try {
        const {email} = req.body;
        if(email === user.email){
            if(user.emailVerified) return;
        };
        const verificationToken = await helpers.jwts.sign({id: req.user, host: req.hostname}, "email");
        if(!verificationToken) return next(new ErrorResponse("Error verifying email", 500));
        console.log("Host name", req.hostname)
        const link = `http://localhost:3000/auth/verify-account/${verificationToken}`;
        // const isSent = await sendMessage('email', email, "verify", link);
        // if(!isSent) return next(new ErrorResonse("Verification Email not sent", 500));
        user.verificationToken = verificationToken
        console.log("token", verificationToken);
        user.email = email;
        user.emailVerified = false;
    }
    catch(err){
        next(error)
    }
}

const sendVerifyPhone = async(user, req, res, next) => {
    try{
        const { phoneNumber, phoneCarrier, type} = req.body;
        if(phoneNumber === user.phoneNumber && phoneCarrier === user.phoneCarrier) {
            if(user.phoneVerified) return;
            console.log("resend info");
        }
        if(phoneNumber === user.phoneNumber && !phoneCarrier){
            if(user.phoneVerified) return;
            console.log("resend info")
        }
        const t = type ? type :'sms';
        const carrExists = await models.Carrier.findOne({carrierName: phoneCarrier, carrierType: t}) || await models.Carrier.findOne({carrierName: phoneCarrier});
        if(!carrExists || !carrExists.carrierEmail) return next(new ErrorResponse("Carrier does not exist. Please send an update request for your carrier to be added!", 400));
        const pEmail = carrExists.carrierEmail;
        console.log("Phone Email: ", pEmail)
        user.phoneNumber = phoneNumber;
        user.phoneCarrierEmail = pEmail;
        const getPin = Math.floor(100000 + Math.random() * 900000);
        const pin = `${getPin}`;
        console.log("pin: " + pin);
        const hashedPin = await bcrypts.hashPassword(pin);
        const pinToken = await jwts.sign({id: req.user, host: req.hostname}, "phone");
        const combinedEmail = user.phoneNumber + user.phoneCarrierEmail;
        // const isSent = await sendMessage('phone', combinedEmail, 'verify', pin);
        console.log("Success: phone");
        user.phonePin = hashedPin;
        user.phoneVerified = false;
        return pinToken
    }
        catch(err){
            next(err)
        }
}


const verification = {
    sendVerifyEmail,
    sendVerifyPhone
}

module.exports = email;