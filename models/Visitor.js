const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String
        },
        phone: {
            type: String,
            required: true
        },
        address: {
            type: String
        },
        purpose: {
            type: String,
            required: true
        },
        company: {
            type: String
        },
        photo: {
            type: String // we will store image URL later
        },
        idProof: {
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Visitor", visitorSchema);