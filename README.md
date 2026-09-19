# Dineshkumar S — Cybersecurity Portfolio

A modern, responsive, high-performance portfolio website built for **Dineshkumar S**, highlighting his capabilities across Cybersecurity, SOC Operations, Ethical Hacking (CEH in progress), Cisco Network Engineering, and IT Support.

## 🚀 Live Features

- **Cyber-Tech Modern Aesthetic**: Deep slate and cyber-green glowing palette with seamless Dark / Light mode switching.
- **Framed Profile Picture**: Dedicated presentation of Dineshkumar with glowing cyber-ring, status badge (*Available for Cybersecurity Roles & Internships*), and quick tech badges.
- **Interactive Cybersecurity Terminal**: A browser-based Unix CLI simulator (`help`, `whoami`, `skills`, `projects`, `experience`, `certs`, `nmap localhost`, `contact`, `clear`) with quick-tap command pills.
- **Featured Projects**:
  - **SHALXNETGUARD**: Flagship SOC & Network Monitoring Platform with Suricata/EVE alert integration, network discovery, and dynamic topology visualization (deployed on Render with FastAPI + React + TypeScript).
  - **Web Vulnerability Scanner**: Automated OWASP vulnerability detection tool written in Python.
  - **Password Strength Checker**: NIST-aligned entropy and password complexity auditor in Python.
- **Experience Timeline**:
  - **Cyber Crime Intern** at Puducherry Cyber Crime Police Station (06/2025 – 07/2025).
  - **Cybersecurity Intern** at Elevate Labs (12/2025 – 01/2026).
- **Categorized Technical Matrix**:
  - Networking & Cisco (VLANs, OSPF, NAT/PAT, ACLs, Subnetting, TCP/IP, OSI Model)
  - Security & Pentesting Tools (Nmap, Metasploit, Burp Suite, Wireshark, OpenVAS, Linux)
  - SOC & Defensive Operations (SIEM, Suricata IDS/IPS, Log Analysis, Threat Detection)
  - IT Support & Systems (Hardware/Software Troubleshooting, OS Support, Cabling)
  - Programming & DevOps (Python, FastAPI, React, TypeScript, Bash)
- **Certifications & Education**:
  - Certified Ethical Hacker (CEH) – EC-Council (*In Progress*)
  - Cybersecurity Virtual Experience Program – Tata Group (Forage)
  - Introduction to Cybersecurity & Ethical Hacking – Cisco Networking Academy
  - Bachelor of Engineering (B.E.) – Mahendra Engineering College (2023–2027)
- **One-Click Contact & Modals**:
  - Instant 1-click clipboard copy for email (`dineshkumar9092a@gmail.com`) with animated toast notification.
  - Interactive Contact Form with mailto client dispatch.
  - Built-in Printable / PDF-saveable Resume Modal.

---

## 📁 Project Structure

```
dineshkumar-portfolio/
├── index.html              # Main semantic HTML5 markup
├── assets/
│   └── profile.jpg         # High-resolution profile photograph
├── css/
│   ├── style.css           # Design tokens, color palettes & typography
│   └── components.css      # Cards, terminal, timeline, navbar & layout styles
├── js/
│   ├── main.js             # Theme switcher, mobile nav, scrollspy & modals
│   └── terminal.js         # Interactive cybersecurity CLI console engine
└── README.md               # Documentation & deployment guide
```

---

## 💻 How to View Locally

Simply double-click `index.html` in Windows Explorer or open via Python's built-in server:

```powershell
# From the project folder:
python -m http.server 3000
```
Then navigate to `http://localhost:3000` in your web browser.

---

## 🌐 Free Deployment Options

### Option 1: GitHub Pages (Recommended)
1. Initialize git in this folder:
   ```powershell
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```
2. Create a repository on GitHub (e.g. `portfolio` or `dineshkumar5008.github.io`).
3. Push your code:
   ```powershell
   git remote add origin https://github.com/dineshKumar5008/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
4. In GitHub repo settings -> **Pages** -> choose `main` branch root -> Save. Your website will be live in 60 seconds!

### Option 2: Vercel / Netlify
- Drag and drop the `dineshkumar-portfolio` folder directly into the Netlify or Vercel dashboard. No build commands required!
