# 🚑 QuickAid — Instant First Aid Help Using Emojis

**QuickAid** is a lightweight and responsive web app that provides step-by-step emergency first-aid instructions through a single emoji-based interface — because in emergencies, **simplicity saves lives**.

---

## 🧠 Problem Statement

In critical situations like burns, cuts, seizures, or choking, people often panic and fail to recall correct first-aid steps. QuickAid solves this by enabling anyone to tap on a simple emoji button and instantly receive the right steps — no typing, no searching.

---

## 💡 Features

- 🔥 Tap-to-help interface using emojis
- 📲 Mobile-friendly and blazing fast UI
- 🌐 Live backend with accurate first-aid steps
- ☁️ Easily deployable (Vercel / Render)
- ♿ Accessibility-ready & beginner-friendly

---

## 🚀 Tech Stack

| Layer      | Tech             |
|------------|------------------|
| Frontend   | React + Vite     |
| Styling    | TailwindCSS      |
| Backend    | Node.js + Express|
| Deployment | Vercel / Render  |

---

## 🧪 How to Run Locally:- 
The backend deployement URL is:- https://quickaid-backend-2isz.onrender.com


The frontend deployment URL is:- https://quick-aid-first-aid-app-8zsl.vercel.app/

### Frontend
```bash
cd client
npm install
npm run dev


Here's What It Currently Does (in its basic form):

Shows emergency buttons (Burn, Cut, Seizure, Choking) on a clean UI.

When clicked, sends a POST request to the backend with the emergency type.

The backend simply receives the data and responds with a success message.

You see alerts like:
"Emergency help for 'Burn' has been sent!"

🔹 What It Does Not Do Yet:
It doesn't actually send help (no real SMS, emails, or maps).

It doesn't store the emergency info (no database yet).

No login, user accounts, or authentication.

No real-time features like admin dashboard or tracking.


QuickAid is a basic prototype app showing how emergency triggers can be sent to a backend server. It’s ideal for demonstrating full-stack flow in a hackathon or learning project.
