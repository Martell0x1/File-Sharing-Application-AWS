# ☁️ FileShare-ElMetarsham awey — A Lightweight File Sharing Web App Using AWS ☁️

Welcome to **FileShare-ElMetarsham** — a sleek, secure, and minimal file-sharing application powered by **Node.js**, **Vanilla JavaScript**, and Amazon Web Services (**S3**, **EC2**, **IAM**, **VPC**).

---

## 🚀 Project Overview

**FileShare-ElMetarsham** is a cloud-native web application that allows users to upload and access files with ease. It was built from scratch using:
- ⚙️ **Node.js** as the backend
- 🎨 **Vanilla JS** for the frontend
- ☁️ **AWS S3** for file storage
- 🖥️ **AWS EC2** for backend deployment
- 🔐 **AWS IAM** for secure credentials and access
- 🌐 **AWS VPC** for network-level security

---

## 📁 Features

- ✅ Multiple file upload with progress feedback and effects
- ✅ Securely uploads files to S3
- ✅ Automatically generates shareable download links
- ✅ Real-time file list view
- ✅ Basic request validation & error handling
- ✅ Zero external frontend libraries — pure JavaScript + CSS

---

## 📸 Demo

![Upload Preview](https://i.imgur.com/Ef7piLn.gif)

> *Add a link to a live demo or attach screenshots/gifs here*

---

## 🧰 Tech Stack

| Layer      | Technology             |
|------------|------------------------|
| Frontend   | HTML, CSS, Vanilla JS  |
| Backend    | Node.js + Express      |
| File Store | AWS S3                 |
| Hosting    | AWS EC2 (Ubuntu)       |
| Auth       | AWS IAM (least privilege) |
| Network    | AWS VPC                |

---

## 🚀 Getting Started

### Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (v18+)
- npm
- AWS CLI (configured with credentials)
- An AWS account with:
  - An **S3 Bucket** created
  - An **EC2 instance** (to run the app)
  - A **custom IAM policy/user** with correct permissions
  - A **VPC** (default or custom)

### Environment Variables

Create a `.env` file in the root directory with the following:

```env
AWS_REGION=your-aws-region
AWS_BUCKET_NAME=your-s3-bucket-name
AWS_ACCESS_KEY=your-access-key-id
AWS_SECRET_KEY=your-secret-access-key
```

> ⚠️ Do NOT commit `.env` to version control. Add it to `.gitignore`.

---

## 🛠 Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/file-sharing-app.git
cd file-sharing-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm run dev
```

Server will run on [http://localhost:3000](http://localhost:3000)

---
# 🛡️ Security Notes
- IAM policies follow the principle of least privilege

- Uploaded files are sanitized and filtered

- Files are not permanently stored on EC2 (auto-deleted after S3 push)
---
## 👨‍💻 Team
Made with ☕ and 💻 by:

- Martell0x1
- huda-ali [(@huda-ali)](https://github.com/huda-ali)
- HabibaHamdy [(@HabibaHamdy2004)](https://github.com/HabibaHamdy2004)
- Karim [(@Karim-mahmoud139)](https://github.com/Karim-mahmoud139)
- loubid [(@loubid)](https://github.com/loubid)
- MariamKhaled741 [(@MariamKhaled741)](https://github.com/MariamKhaled741)

---
## 📜 License
- MIT License. Free to use and build upon.
