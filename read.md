# Visitor Pass Management System - Backend

## Overview

This is the backend API for the Visitor Pass Management System developed using Node.js, Express.js, and MongoDB.

The backend provides REST APIs for:

* Authentication
* Visitor Management
* Appointment Management
* Pass Generation
* QR Code Generation
* PDF Badge Generation
* Logs
* Reports
* Analytics

---

## Live API

https://v-pms-backend.onrender.com/

---

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* Nodemailer
* QRCode
* PDFKit
* json2csv

---

## Features

### Authentication

* Register User
* Login User
* JWT Authentication
* Role Authorization

### Visitor APIs

* Create Visitor
* Get Visitors
* Update Visitor
* Delete Visitor

### Appointment APIs

* Create Appointment
* Update Status
* View Appointments

### Pass APIs

* Generate Visitor Pass
* Generate QR Code
* Download PDF Badge

### Logs APIs

* Check-In Visitor
* Check-Out Visitor
* View Logs

### Reports APIs

* Export Visitor Report
* Export Appointment Report
* Export Pass Report
* Export Log Report

### Analytics APIs

* Total Visitors
* Total Appointments
* Total Passes
* Total Logs

---

## Installation

### Clone Repository

```bash
git clone https://github.com/workneel2111/V_PMS_backend.git
```

### Navigate

```bash
cd V_PMS_backend
```

### Install Packages

```bash
npm install
```

---

## Environment Variables

Create:

```env
.env
```

Add:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=mysecretkey

EMAIL_USER=your_email@gmail.com

EMAIL_PASS=your_app_password
```

---

## Run Server

Development:

```bash
npm run dev
```

Production:

```bash
npm start
```

Server runs on:

```text
http://localhost:5000
```

---

## Seed Demo Data

Run:

```bash
npm run seed
```

This creates:

### Admin

Email:
[neel@test.com](mailto:neel@test.com)

Password:
123456

### Security

Email:
[security@test.com](mailto:security@test.com)

Password:
123456

### Employee

Email:
[employee@test.com](mailto:employee@test.com)

Password:
123456

### Visitor

Email:
[visitor@test.com](mailto:visitor@test.com)

Password:
123456

---

## API Routes

Authentication

```text
/api/auth
```

Visitors

```text
/api/visitors
```

Appointments

```text
/api/appointments
```

Passes

```text
/api/passes
```

Logs

```text
/api/logs
```

Reports

```text
/api/reports
```

Analytics

```text
/api/dashboard
```

---

## Deployment

Backend Hosted On:

Render

Frontend Hosted On:

Netlify

---

## Author

Neel Patel

B.Tech Computer Science Engineering
