const mongoose = require("mongoose");

const checkLogSchema = new mongoose.Schema(
    {
        pass: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Pass",
            required: true
        },

        visitor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Visitor",
            required: true
        },

        checkInTime: {
            type: Date
        },

        checkOutTime: {
            type: Date
        },

        status: {
            type: String,
            enum: ["checked-in", "checked-out"],
            default: "checked-in"
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("CheckLog", checkLogSchema);