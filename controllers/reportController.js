const { Parser } = require("json2csv");

const Visitor = require("../models/Visitor");
const Appointment = require("../models/Appointment");
const Pass = require("../models/Pass");
const CheckLog = require("../models/CheckLog");

/* =========================
   VISITORS CSV
========================= */

const exportVisitors = async (req, res) => {

    try {

        const visitors =
            await Visitor.find();

        const parser =
            new Parser();

        const csv =
            parser.parse(visitors);

        res.header(
            "Content-Type",
            "text/csv"
        );

        res.attachment(
            "visitors-report.csv"
        );

        return res.send(csv);

    } catch (error) {

        res.status(500).json({
            message:
                error.message
        });
    }
};

/* =========================
   APPOINTMENTS CSV
========================= */

const exportAppointments =
    async (req, res) => {

        try {

            const appointments =
                await Appointment.find()
                    .populate(
                        "visitor"
                    )
                    .populate(
                        "host"
                    );

            const parser =
                new Parser();

            const csv =
                parser.parse(
                    appointments
                );

            res.header(
                "Content-Type",
                "text/csv"
            );

            res.attachment(
                "appointments-report.csv"
            );

            return res.send(csv);

        } catch (error) {

            res.status(500).json({
                message:
                    error.message
            });
        }
    };

/* =========================
   PASSES CSV
========================= */

const exportPasses =
    async (req, res) => {

        try {

            const passes =
                await Pass.find()
                    .populate(
                        "visitor"
                    );

            const parser =
                new Parser();

            const csv =
                parser.parse(
                    passes
                );

            res.header(
                "Content-Type",
                "text/csv"
            );

            res.attachment(
                "passes-report.csv"
            );

            return res.send(csv);

        } catch (error) {

            res.status(500).json({
                message:
                    error.message
            });
        }
    };

/* =========================
   LOGS CSV
========================= */

const exportLogs =
    async (req, res) => {

        try {

            const logs =
                await CheckLog.find()
                    .populate(
                        "visitor"
                    );

            const parser =
                new Parser();

            const csv =
                parser.parse(
                    logs
                );

            res.header(
                "Content-Type",
                "text/csv"
            );

            res.attachment(
                "logs-report.csv"
            );

            return res.send(csv);

        } catch (error) {

            res.status(500).json({
                message:
                    error.message
            });
        }
    };

module.exports = {
    exportVisitors,
    exportAppointments,
    exportPasses,
    exportLogs
};