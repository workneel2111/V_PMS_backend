# Visitor Pass Management System - Backend

## Overview

The backend of the Visitor Pass Management System is developed using Node.js, Express.js, and MongoDB.

It provides REST APIs for authentication, visitor management, appointment scheduling, pass generation, QR code generation, PDF badge creation, visitor logs, dashboard analytics, and report exports.

---

## Features

### Authentication & Authorization

* JWT Authentication
* Password Hashing using bcrypt
* Role-Based Access Control

Supported Roles:

* Admin
* Security
* Employee
* Visitor

---

### Visitor Management

* Add Visitor
* View Visitors
* Store Visitor Information
* Upload Visitor Photo

---

### Appointment Management

* Create Appointment
* Assign Host
* Approve Appointment
* Reject Appointment
* View Appointments

---

### Pass Management

* Generate QR-Based Pass
* Store Pass Information
* Download PDF Badge
* Pass Validation

---

### Check-In / Check-Out

* Visitor Entry Logs
* Visitor Exit Logs
* Visit Tracking
* Log History

---

### Notifications

* Email Notifications
* Appointment Approval Notification
* Pass Generation Notification

---

### Dashboard Analytics

* Total Visitors
* Total Appointments
* Total Passes
* Total Logs

---

### Reports Export

* Visitors CSV
* Appointments CSV
* Passes CSV
* Logs CSV

---

## Technology Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JWT
* bcryptjs

### Additional Packages

* qrcode
* pdfkit
* nodemailer
* multer
* json2csv
* dotenv

---

## Installation

### Clone Repository

git clone <repository-url>

### Navigate to Backend

cd backend

### Install Dependencies

npm install

---

## Environment Variables

Create a .env file:

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

EMAIL_USER=your_email

EMAIL_PASS=your_email_password

---

## Run Development Server

npm run dev

---

## Run Production Server

npm start

---

## Seed Demo Data

Run:

npm run seed

Demo Accounts:

Admin:

Email: [admin@test.com](mailto:admin@test.com)

Password: 123456

Security:

Email: [security@test.com](mailto:security@test.com)

Password: 123456

Employee:

Email: [employee@test.com](mailto:employee@test.com)

Password: 123456

---

## API Endpoints

### Authentication

POST /api/auth/register

POST /api/auth/login

GET /api/auth/users

---

### Visitors

POST /api/visitors

GET /api/visitors

---

### Appointments

POST /api/appointments

GET /api/appointments

PUT /api/appointments/status/:id

---

### Passes

POST /api/passes/generate/:id

GET /api/passes

GET /api/passes/pdf/:id

---

### Logs

POST /api/logs/checkin

POST /api/logs/checkout

GET /api/logs

---

### Dashboard

GET /api/dashboard

---

### Reports

GET /api/reports/visitors

GET /api/reports/appointments

GET /api/reports/passes

GET /api/reports/logs

---

## Project Structure

backend

├── controllers

├── middleware

├── models

├── routes

├── uploads

├── utils

├── seed.js

├── server.js

├── package.json

└── README.md

---

## Deployment

### Render

Root Directory:

backend

Build Command:

npm install

Start Command:

npm start

---

## Developed By

Neel Patel

B.Tech Computer Science Engineering
