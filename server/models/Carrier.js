const mongoose = require('mongoose');

const carrierSchema = new mongoose.Schema({
    carrierName: {
        type: String,
        required: [true, "Please provide a carrier name"],
        lowercase: true
    },
    carrierEmail: {
        type: String,
        required: [true, "Please provide a carrier base email"],
        lowercase: true
    },
    carrierType: {
        type: String,
        lowercase: true,
        default: "sms",
        enum: ['sms', 'mms']
    }
});

const Carrier = mongoose.model("Carrier", carrierSchema);

module.exports = Carrier;