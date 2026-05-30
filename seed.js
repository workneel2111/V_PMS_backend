require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("./models/User");
const Visitor = require("./models/Visitor");
const Appointment = require("./models/Appointment");

mongoose.connect(process.env.MONGO_URI)
.then(async () => {

    console.log("MongoDB Connected");

    await User.deleteMany();
    await Visitor.deleteMany();
    await Appointment.deleteMany();

    const password = await bcrypt.hash(
        "123456",
        10
    );

    // USERS

    const admin = await User.create({
        name: "Neel Patel",
        email: "neel@test.com",
        password,
        role: "admin"
    });

    const security = await User.create({
        name: "Security User",
        email: "security@test.com",
        password,
        role: "security"
    });

    const employee = await User.create({
        name: "Employee User",
        email: "employee@test.com",
        password,
        role: "employee"
    });

    const visitorUser = await User.create({
        name: "Visitor User",
        email: "visitor@test.com",
        password,
        role: "visitor"
    });

    console.log("Users Seeded");

    // VISITORS

    const visitor1 = await Visitor.create({
        fullName: "Neel Patel",
        email: "visitor@test.com",
        phone: "9876543210",
        purpose: "Project Discussion",
        company: "ABC Pvt Ltd"
    });

    const visitor2 = await Visitor.create({
        fullName: "Meet Patel",
        email: "meet@test.com",
        phone: "9876543211",
        purpose: "HR Interview",
        company: "XYZ Pvt Ltd"
    });

    console.log("Visitors Seeded");

    // APPOINTMENTS

    await Appointment.create({
        visitor: visitor1._id,
        host: employee._id,
        date: "2026-06-01",
        time: "11:00 AM",
        purpose: "Project Discussion",
        status: "approved"
    });

    await Appointment.create({
        visitor: visitor2._id,
        host: employee._id,
        date: "2026-06-02",
        time: "02:00 PM",
        purpose: "HR Interview",
        status: "pending"
    });

    console.log("Appointments Seeded");
    console.log("Seed Complete");

    process.exit();

})
.catch((err) => {

    console.log(err);

    process.exit(1);

});