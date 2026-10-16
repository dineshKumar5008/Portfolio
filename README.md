# Dineshkumar S — Cybersecurity Portfolio

A modern, responsive, high-performance portfolio website built for **Dineshkumar S**, highlighting his capabilities across Cybersecurity, SOC Operations, Cryptographic Innovation, Cisco Network Engineering, and IT Support.

## 🚀 Live Features

- **Classic Modern Editorial Aesthetic**: Warm charcoal and linen editorial design system with bespoke typography (*Instrument Serif*, *Plus Jakarta Sans*, *JetBrains Mono*) and smooth Dark / Light mode switching.
- **Framed Profile Portrait**: Refined photographic portrait framing with institutional credential badges.
- **Interactive Cybersecurity Terminal**: A browser-based Unix CLI simulator (`help`, `whoami`, `skills`, `projects`, `patent`, `ieee`, `experience`, `certs`, `nmap localhost`, `contact`, `clear`) with quick-tap command pills.
- **Featured Projects**:
  - **SHALXNETGUARD**: Flagship SOC & Network Monitoring Platform with Suricata/EVE alert integration, network discovery, and dynamic topology visualization (deployed on Render with FastAPI + React + TypeScript).
  - **AI-Driven E-Voting System**: IEEE-published cloud election architecture featuring MFA, DSL eligibility rules, SHA-256 hash chaining, and real-time AI Behavioral Analytics (AIBA) with 99.1% fraud detection.
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
- **Published Intellectual Property (Patent)**:
  - *Title*: "A Novel Self-Destructive Ephemeral Cryptographic Key Generation Mechanism for Secure Digital Storage and Access"
  - *Authority*: Indian Patent Office (IPO) | Application No: `202641022205 A` | Published: `06/03/2026` (Journal No: 10/2026, Pg. 27543)
  - *IPC*: `H04L 9/08`, `H04L 9/06`, `H04L 9/30`, `H04L 9/32`, `H04L 9/00`
- **Peer-Reviewed IEEE Conference Publication**:
  - *Title*: "AI-Driven Cryptographically Auditable Cloud-Based E-Voting System"
  - *Conference*: 5th International Conference on Innovative Mechanisms for Industry Applications (ICIMIA-2026), IEEE
  - *ISBN*: `979-8-3315-6199-4` | *DVD Part*: `CFP26K58-DVD` | *Pages*: `820–826` | *IEEE Record*: `979-8-3315-6200-7/26`
  - *Presentation*: Certificate of Presentation from Sasurie College of Engineering, Tirupur (IEEE IAS)
- **Certifications & Education**:
  - Cybersecurity Virtual Experience Program – Tata Group (Forage)
  - Introduction to Cybersecurity & Ethical Hacking – Cisco Networking Academy
  - Bachelor of Engineering (B.E.) – Mahendra Engineering College (2023–2027)
- **One-Click Contact & Modals**:
  - Instant direct mailto (`dineshkumar9092a@gmail.com`) and phone (`tel:+919092585008`) dispatch.
  - Interactive Contact Form with mailto client dispatch.
  - Built-in Printable / PDF-saveable ATS Resume Modal.

---

## 📁 Project Structure

```
dineshkumar-portfolio/
├── index.html              # Main semantic HTML5 markup
├── assets/
│   ├── profile.jpg         # High-resolution profile photograph
│   ├── docs/
│   │   └── ieee-icimia-2026-evoting-paper.pdf  # Published IEEE 7-page research paper
│   └── images/
│       └── ieee-certificate-dineshkumar.jpg     # IEEE presentation certificate
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
