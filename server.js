require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

/* =========================
   MIDDLEWARE
========================= */

app.use(cors());

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(
    "/uploads",
    express.static("uploads")
);

/* =========================
   DATABASE CONNECTION
========================= */

mongoose
    .connect(process.env.MONGO_URI)
    .then(() =>
        console.log(
            "MongoDB Connected"
        )
    )
    .catch((error) =>
        console.log(error)
    );

/* =========================
   ROUTES
========================= */

const authRoutes =
    require("./routes/authRoutes");

const visitorRoutes =
    require("./routes/visitorRoutes");

const appointmentRoutes =
    require("./routes/appointmentRoutes");

const passRoutes =
    require("./routes/passRoutes");

const checkLogRoutes =
    require("./routes/checkLogRoutes");

const dashboardRoutes =
    require("./routes/dashboardRoutes");

const reportRoutes =
    require("./routes/reportRoutes");

/* =========================
   API ROUTES
========================= */

app.use(
    "/api/auth",
    authRoutes
);

app.use(
    "/api/visitors",
    visitorRoutes
);

app.use(
    "/api/appointments",
    appointmentRoutes
);

app.use(
    "/api/passes",
    passRoutes
);

app.use(
    "/api/logs",
    checkLogRoutes
);

app.use(
    "/api/dashboard",
    dashboardRoutes
);

app.use(
    "/api/reports",
    reportRoutes
);

/* =========================
   HOME ROUTE
========================= */

app.get("/", (req, res) => {

    res.json({
        success: true,
        message:
            "Visitor Pass Management API Running"
    });

});

/* =========================
   404 ROUTE
========================= */

app.use((req, res) => {

    res.status(404).json({
        success: false,
        message: "Route not found"
    });

});

/* =========================
   SERVER
========================= */

const PORT =
    process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(
        `Server running on port ${PORT}`
    );

});