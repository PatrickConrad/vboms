import crypto from "crypto";

export const getRandomSecret = (num) => {
    const random = crypto.randomBytes(num).toString('hex')
    return random;
}
