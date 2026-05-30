const Pass = require("../models/Pass");
const Appointment = require("../models/Appointment");

const generateQRCode = require("../utils/generateQR");
const sendEmail = require("../utils/sendEmail");

const PDFDocument = require("pdfkit");

/* =========================
   GENERATE PASS
========================= */

const generatePass = async (req, res) => {

    try {

        const appointment =
            await Appointment.findById(
                req.params.id
            )
                .populate("visitor")
                .populate("host");

        if (!appointment) {

            return res.status(404).json({
                message:
                    "Appointment not found"
            });
        }

        const qrData = `
Visitor: ${appointment.visitor.fullName}
Purpose: ${appointment.purpose}
Date: ${appointment.date}
Time: ${appointment.time}
`;

        const qrCode =
            await generateQRCode(
                qrData
            );

        const pass =
            await Pass.create({

                visitor:
                    appointment.visitor._id,

                appointment:
                    appointment._id,

                qrCode,

                validTill:
                    new Date(
                        Date.now() +
                        24 *
                        60 *
                        60 *
                        1000
                    )
            });

        /* =========================
           SEND EMAIL
        ========================= */

        if (
            appointment.visitor?.email
        ) {

            await sendEmail(

                appointment.visitor.email,

                "Visitor Pass Generated",

                `
Hello ${appointment.visitor.fullName},

Your visitor pass has been generated successfully.

Purpose:
${appointment.purpose}

Date:
${appointment.date}

Time:
${appointment.time}

Pass ID:
${pass._id}

Thank you.
`
            );
        }

        res.status(201).json({

            message:
                "Pass generated successfully",

            pass
        });

    } catch (error) {

        res.status(500).json({
            message:
                error.message
        });
    }
};

/* =========================
   GET ALL PASSES
========================= */

const getPasses = async (
    req,
    res
) => {

    try {

        const passes =
            await Pass.find()
                .populate("visitor")
                .populate("appointment");

        res.json(passes);

    } catch (error) {

        res.status(500).json({
            message:
                error.message
        });
    }
};

/* =========================
   DOWNLOAD PDF BADGE
========================= */

const downloadPassPDF = async (
    req,
    res
) => {

    try {

        const pass =
            await Pass.findById(
                req.params.id
            )
                .populate("visitor")
                .populate("appointment");

        if (!pass) {

            return res.status(404).json({
                message:
                    "Pass not found"
            });
        }

        const doc =
            new PDFDocument();

        res.setHeader(
            "Content-Type",
            "application/pdf"
        );

        res.setHeader(
            "Content-Disposition",
            `attachment; filename=visitor-pass-${pass._id}.pdf`
        );

        doc.pipe(res);

        doc
            .fontSize(24)
            .text(
                "VISITOR PASS",
                {
                    align:
                        "center"
                }
            );

        doc.moveDown();

        doc
            .fontSize(14)
            .text(
                `Pass ID: ${pass._id}`
            );

        doc.text(
            `Visitor: ${pass.visitor?.fullName}`
        );

        doc.text(
            `Purpose: ${pass.appointment?.purpose}`
        );

        doc.text(
            `Date: ${pass.appointment?.date}`
        );

        doc.text(
            `Time: ${pass.appointment?.time}`
        );

        doc.text(
            `Valid Till: ${pass.validTill}`
        );

        doc.moveDown();

        doc.text(
            "QR Code"
        );

        if (
            pass.qrCode
        ) {

            const base64Data =
                pass.qrCode.replace(
                    /^data:image\/png;base64,/,
                    ""
                );

            const qrBuffer =
                Buffer.from(
                    base64Data,
                    "base64"
                );

            doc.image(
                qrBuffer,
                {
                    fit: [
                        150,
                        150
                    ],
                    align:
                        "center"
                }
            );
        }

        doc.end();

    } catch (error) {

        res.status(500).json({
            message:
                error.message
        });
    }
};

module.exports = {
    generatePass,
    getPasses,
    downloadPassPDF
};