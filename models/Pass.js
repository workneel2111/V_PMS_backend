const mongoose = require("mongoose");

const passSchema = new mongoose.Schema(
    {
        visitor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Visitor",
            required: true
        },

        appointment: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Appointment",
            required: true
        },

        qrCode: {
            type: String
        },

        validFrom: {
            type: Date,
            default: Date.now
        },

        validTill: {
            type: Date
        },

        status: {
            type: String,
            enum: ["active", "expired"],
            default: "active"
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Pass", passSchema);