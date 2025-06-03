<img width="392" alt="image" src="https://github.com/user-attachments/assets/7ea14b0c-e749-45e2-b114-d508ec6519f6" /><p align="center">
  <img src="./banner.png" alt="Rocket Dockets Banner" width="400" />
</p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/Status-In%20Development-orange" alt="Status" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Version-1.0.0-blueviolet" alt="Version" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Tech-HTML%20%7C%20JS%20%7C%20Azure%20OCR-blue" alt="Tech Stack" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Backend-AWS_Lambda_%7C_API_Gateway-yellowgreen" alt="Backend" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Payments-Stripe-6772e5" alt="Stripe" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Deployed%20on-Cursor%20+%20Netlify-lightgrey" alt="Hosting" /></a>
  <a href="#"><img src="https://img.shields.io/badge/License-Proprietary-inactive" alt="License" /></a>
</p>


# 🚀 Rocket Dockets

**Rocket Dockets** is a lightweight, AI-powered document management platform designed for fast, intelligent processing of financial documents—receipts, invoices, and delivery dockets. Built for freelancers, small businesses, and growing enterprises, it offers real-time OCR scanning, procurement traceability, and a secure, serverless backend infrastructure.

---

## 📚 Table of Contents
- [Overview](#-overview)
- [Core Features](#-core-features)
- [Target Users](#-target-users)
- [Technology Stack](#-technology-stack)
- [Architecture Overview](#-architecture-overview)
- [Getting Started](#-getting-started)
- [Pricing Model](#-pricing-model)
- [Roadmap](#-roadmap)
- [Security & Compliance](#-security--compliance)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 📌 Overview

Rocket Dockets enables users to:

- **Upload financial documents** (PDF or image)
- **Preview scanned receipts** in real time
- **Extract structured data** using Azure's Form Recognizer
- **Avoid duplicates** with smart document fingerprinting
- **Track document chains** for procurement verification
- **Store results securely** in a scalable cloud backend

This tool is especially valuable for those managing frequent financial paperwork and seeking automation without enterprise-level costs.

---

## 🚀 Core Features

| Feature                             | Description                                                                 |
|-------------------------------------|-----------------------------------------------------------------------------|
| Document Upload                     | PDF/image file support with drag-and-drop or file picker                    |
| Real-Time Preview                   | Responsive visual feedback of scanned content                              |
| Azure OCR Integration               | High-accuracy OCR using Azure Form Recognizer                              |
| Duplicate Detection                 | Blocks re-uploading of previously scanned documents                        |
| Document Matching                   | (Phase 2) Links delivery dockets to invoices for verification              |
| Category Classification             | (Planned) Auto-sorts documents by type, date, and merchant                 |
| Cloud Storage Ready                 | Secure S3-compatible storage architecture                                  |
| Multi-Platform Support              | Optimized for mobile, tablet, and desktop                                  |

---

## 🎯 Target Users

- **Small Business Owners & Contractors**
- **Accountants & Admin Staff**
- **Freelancers & Tradespeople**
- **Procurement/Operations Managers**
- **Automation Enthusiasts (NZ, AUS, USA, CAN)**

---

## 🛣 Roadmap

| Phase        | Feature                                     | Status       | Notes                              |
|--------------|---------------------------------------------|--------------|------------------------------------|
| Phase 1      | OCR Scan Preview (Azure OCR)                | ✅ Complete   | Image + PDF supported              |
| Phase 1.5    | Watermark & Preview Scaling Fix             | ✅ Complete   | Visual UX improvements             |
| Phase 2      | Duplicate Detection                         | 🔄 In Progress | Server-side hash logic via Lambda |
| Phase 2      | Delivery Docket to Invoice Matching         | 🕓 Planned    | Adds B2B procurement traceability  |
| Phase 3      | Stripe Billing Integration (Freemium Model) | 🕓 Planned    | Dynamic tiered features            |
| Phase 3      | Supabase/Firebase Integration               | 🕓 Planned    | Transition from Sheets to DB       |
| Phase 4      | AI-Powered Auto-Categorization              | 🕓 Planned    | GPT-style tagging engine           |
| Phase 5      | White-label / API Client Version            | 🕓 Planned    | B2B enablement                     |

---

## 🧰 Technology Stack

| Layer        | Tool/Service                              |
|--------------|-------------------------------------------|
| **Frontend** | Cursor (HTML/CSS/JS), Webflow (landing)   |
| **Backend**  | AWS Lambda, API Gateway                   |
| **OCR**      | Azure Form Recognizer (Document Intelligence) |
| **Hosting**  | Netlify / Vercel                          |
| **Database** | Google Sheets (trial), Supabase/Firebase (prod) |
| **Storage**  | AWS S3 or compatible object storage       |
| **Payments** | Stripe                                    |
| **AI Assist**| ChatGPT (Pro), Google Gemini (validation) |
| **Imagery**  | DALL·E, Midjourney                        |

---

## 🏗 Architecture Overview

```txt
[Frontend (scan-receipt.html)]
     |
     | -> [Preview UI + Scan Button]
     |
     v
[API Gateway Endpoint]
     |
     v
[AWS Lambda Function]
     |
     v
[Azure Form Recognizer]
     |
     v
[Parsed JSON Results]
     |
     +--> Google Sheets / Supabase
     +--> Returned to UI for review
