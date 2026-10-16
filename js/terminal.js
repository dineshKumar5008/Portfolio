/**
 * Interactive Cybersecurity Terminal Simulator
 * Dineshkumar S Portfolio
 */

(function () {
  const terminalBody = document.getElementById('terminalBody');
  const terminalInput = document.getElementById('terminalInput');
  const suggestionBtns = document.querySelectorAll('.terminal-pill-btn');

  if (!terminalBody || !terminalInput) return;

  const commands = {
    help: () => `
<div class="terminal-line info">Available Commands:</div>
<div class="terminal-line">  <span class="cmd-echo">whoami</span>       - Display overview & professional bio</div>
<div class="terminal-line">  <span class="cmd-echo">skills</span>       - List technical proficiencies & security tools</div>
<div class="terminal-line">  <span class="cmd-echo">projects</span>     - Show featured cybersecurity projects</div>
<div class="terminal-line">  <span class="cmd-echo">patent</span>       - View published cryptographic security patent</div>
<div class="terminal-line">  <span class="cmd-echo">ieee</span>         - View published IEEE research paper on AI E-Voting</div>
<div class="terminal-line">  <span class="cmd-echo">experience</span>   - Display internship & practical background</div>
<div class="terminal-line">  <span class="cmd-echo">certs</span>        - View certifications (Cisco, Tata Group)</div>
<div class="terminal-line">  <span class="cmd-echo">contact</span>      - Get email, phone, and social endpoints</div>
<div class="terminal-line">  <span class="cmd-echo">nmap</span>         - Run a simulated port scan on local host</div>
<div class="terminal-line">  <span class="cmd-echo">clear</span>        - Clear the terminal screen</div>
`,

    whoami: () => `
<div class="terminal-line success"><strong>Dineshkumar S</strong></div>
<div class="terminal-line">Roles: Cybersecurity Analyst | Published Patent Innovator | IEEE Published Researcher | SOC & Network Support</div>
<div class="terminal-line">Intellectual Property & Research: Published Patent in Ephemeral Cryptography (IPO) & IEEE Published Research (ICIMIA-2026)</div>
<div class="terminal-line">Education: B.E. (Mahendra Engineering College, 2023-2027 Final Year)</div>
<div class="terminal-line">Status: <span class="success">● Active - Available for Cybersecurity & SOC Roles</span></div>
<div class="terminal-line info">"Specialized in defensive network monitoring (Suricata/FastAPI), ethical hacking with Nmap/Metasploit, ephemeral cryptographic security architectures, and hands-on IT support."</div>
`,

    patent: () => `
<div class="terminal-line info">=== Published Intellectual Property / Patent ===</div>
<div class="terminal-line"><span class="success">● STATUS: PUBLISHED</span> (Indian Patent Office / IPO)</div>
<div class="terminal-line"><strong>Title</strong>     : A Novel Self-Destructive Ephemeral Cryptographic Key Generation Mechanism for Secure Digital Storage and Access</div>
<div class="terminal-line"><strong>App No</strong>    : 202641022205 A</div>
<div class="terminal-line"><strong>Published</strong> : 06/03/2026 (The Patent Office Journal No. 10/2026, Page 27543)</div>
<div class="terminal-line"><strong>IPC Class</strong> : H04L 9/08, 9/06, 9/30, 9/32, 9/00</div>
<div class="terminal-line"><strong>Applicant</strong> : Mahendra Engineering College</div>
<div class="terminal-line"><strong>Innovator</strong> : Mr. S. Dineshkumar (Lead Student Innovator)</div>
<div class="terminal-line info">Abstract: Novel architecture decoupling persistent data storage from ephemeral cryptographic key lifecycles. Automates deterministic key destruction upon session completion or anomaly detection, mitigating memory extraction and forensic data compromise.</div>
`,

    ieee: () => `
<div class="terminal-line info">=== Published IEEE Research Paper & Presentation ===</div>
<div class="terminal-line"><span class="success">● STATUS: PUBLISHED & PRESENTED (IEEE ICIMIA-2026)</span></div>
<div class="terminal-line"><strong>Title</strong>       : AI-Driven Cryptographically Auditable Cloud-Based E-Voting System</div>
<div class="terminal-line"><strong>Conference</strong>  : 5th International Conference on Innovative Mechanisms for Industry Applications (ICIMIA-2026)</div>
<div class="terminal-line"><strong>Publisher</strong>   : IEEE / IEEE Industry Applications Society (IAS)</div>
<div class="terminal-line"><strong>ISBN</strong>        : 979-8-3315-6199-4 | DVD Part No: CFP26K58-DVD</div>
<div class="terminal-line"><strong>IEEE Record</strong> : 979-8-3315-6200-7/26 | Pages: 820-826 (7 Pages)</div>
<div class="terminal-line"><strong>Authors</strong>     : S. Jeevitha, N. Harishwar, <strong>S. DineshKumar</strong>, B. Gopinath, J. Dineshwar</div>
<div class="terminal-line"><strong>Key Metrics</strong> : MFA Success: 98.9% | DSL Eligibility: 98.6% | Hash-Chain Integrity: 99.9% | Fraud Detection: 99.1%</div>
<div class="terminal-line info">Abstract: Cloud-based e-voting platform integrating MFA, Domain-Specific Language (DSL) voter qualification, SHA-256 cryptographic hash-chain audit trails, and AI-Based Behavioural Analytics (AIBA) tracking keystroke dynamics and mouse kinetics in real-time.</div>
<div class="terminal-line">Document    : <a href="assets/docs/ieee-icimia-2026-evoting-paper.pdf" target="_blank">Download IEEE Full Paper (PDF)</a> | <a href="assets/images/ieee-certificate-dineshkumar.jpg" target="_blank">View Presentation Certificate</a></div>
`,

    skills: () => `
<div class="terminal-line info">=== Technical Skill Matrix ===</div>
<div class="terminal-line"><span class="cmd-echo">[Security Tools]</span>  : Nmap, Metasploit, Burp Suite, Wireshark, OpenVAS, Linux (Kali/Ubuntu)</div>
<div class="terminal-line"><span class="cmd-echo">[SOC & Defense]</span>   : SIEM Concepts, Log Analysis, Threat Detection, Suricata EVE-JSON, Endpoint Security</div>
<div class="terminal-line"><span class="cmd-echo">[Networking]</span>      : OSI Model, TCP/IP, IPv4, Subnetting, VLANs, Routers & Switches, OSPF, NAT/PAT, ACLs</div>
<div class="terminal-line"><span class="cmd-echo">[IT Support]</span>      : Hardware/Software Diagnostics, System Config, Network Troubleshooting, Windows & Peripherals</div>
<div class="terminal-line"><span class="cmd-echo">[Development]</span>     : Python, FastAPI, React, TypeScript, Bash/Shell</div>
`,

    projects: () => `
<div class="terminal-line info">=== Deployed & Open-Source Projects ===</div>
<div class="terminal-line"><strong>1. SHALXNETGUARD</strong> <span class="success">[LIVE SOC PLATFORM]</span></div>
<div class="terminal-line">   Cybersecurity SOC & Network Monitoring Platform with Suricata integration, network discovery & topology.</div>
<div class="terminal-line">   URL: <a href="https://shalxnetguardsocs.tech" target="_blank">https://shalxnetguardsocs.tech</a></div>
<div class="terminal-line"><strong>2. AI E-Voting System</strong> <span class="success">[IEEE PUBLISHED RESEARCH]</span></div>
<div class="terminal-line">   Cryptographically auditable cloud voting with MFA, SHA-256 hash chaining, and AI behavioral fraud analytics.</div>
<div class="terminal-line">   Paper: <a href="assets/docs/ieee-icimia-2026-evoting-paper.pdf" target="_blank">Read IEEE Paper (PDF)</a> | Certificate: <a href="assets/images/ieee-certificate-dineshkumar.jpg" target="_blank">View Certificate</a></div>
<div class="terminal-line"><strong>3. Web Vulnerability Finder</strong></div>
<div class="terminal-line">   Automated security tool to detect common OWASP weaknesses in web applications.</div>
<div class="terminal-line">   Repo: <a href="https://github.com/dineshKumar5008/Web-Vulnerability-Scanner" target="_blank">github.com/dineshKumar5008/Web-Vulnerability-Scanner</a></div>
<div class="terminal-line"><strong>4. Password Strength Checker</strong></div>
<div class="terminal-line">   Entropy calculation and password vulnerability evaluator based on NIST standards.</div>
<div class="terminal-line">   Repo: <a href="https://github.com/dineshKumar5008/password-strength" target="_blank">github.com/dineshKumar5008/password-strength</a></div>
`,

    experience: () => `
<div class="terminal-line info">=== Internship Experience ===</div>
<div class="terminal-line"><strong>[06/2025 - 07/2025] Cyber Crime Intern</strong> - Puducherry Cyber Crime Police Station</div>
<div class="terminal-line">  - Intake and documentation of official cybercrime complaints.</div>
<div class="terminal-line">  - Supported investigation on social media-based hardware financial fraud cases.</div>
<div class="terminal-line">  - Handled digital evidence logging across full case lifecycles.</div>
<br>
<div class="terminal-line"><strong>[12/2025 - 01/2026] Cybersecurity Intern</strong> - Elevate Labs</div>
<div class="terminal-line">  - Vulnerability scanning and network traffic analysis with OpenVAS, Nmap & Wireshark.</div>
<div class="terminal-line">  - Developed Python-based security tools for vulnerability and credential auditing.</div>
`,

    certs: () => `
<div class="terminal-line info">=== Certifications & Credentials ===</div>
<div class="terminal-line">1. <span class="success">[VERIFIED]</span> Cybersecurity Virtual Experience Program - Tata Group (Forage)</div>
<div class="terminal-line">2. <span class="success">[VERIFIED]</span> Introduction to Cybersecurity & Ethical Hacking - Cisco Networking Academy</div>
`,

    contact: () => `
<div class="terminal-line info">=== Communication Endpoints ===</div>
<div class="terminal-line">Email    : <a href="mailto:dineshkumar9092a@gmail.com">dineshkumar9092a@gmail.com</a></div>
<div class="terminal-line">Phone    : <a href="tel:+919092585008">+91 9092585008</a></div>
<div class="terminal-line">LinkedIn : <a href="https://www.linkedin.com/in/dineshkumar-senthilkumar-514b84294/" target="_blank">linkedin.com/in/dineshkumar-senthilkumar-514b84294/</a></div>
<div class="terminal-line">GitHub   : <a href="https://github.com/dineshKumar5008" target="_blank">github.com/dineshKumar5008</a></div>
`,

    nmap: () => `
<div class="terminal-line info">Starting Nmap 7.94 ( https://nmap.org ) at 127.0.0.1 ...</div>
<div class="terminal-line">Nmap scan report for dineshkumar-sec.local (127.0.0.1)</div>
<div class="terminal-line">Host is up (0.00012s latency).</div>
<div class="terminal-line">PORT     STATE SERVICE       VERSION</div>
<div class="terminal-line"><span class="success">22/tcp   open</span>  ssh           OpenSSH 9.3p1 (Linux Security Station)</div>
<div class="terminal-line"><span class="success">80/tcp   open</span>  http          Portfolio Static Gateway</div>
<div class="terminal-line"><span class="success">443/tcp  open</span>  ssl/https     TLS 1.3 Strict Encrypted</div>
<div class="terminal-line"><span class="success">8000/tcp open</span>  http-alt      FastAPI / SHALXNETGUARD SOC Engine</div>
<div class="terminal-line info">Nmap done: 1 IP address (1 host up) scanned in 0.42 seconds. Security posture: HARDENED.</div>
`,

    clear: () => {
      terminalBody.innerHTML = '';
      return '';
    }
  };

  // Command aliases
  commands.publication = commands.ieee;
  commands.paper = commands.ieee;
  commands.research = commands.ieee;

  function executeCommand(input) {
    const rawCmd = input.trim().toLowerCase();
    if (!rawCmd) return;

    // Append user command
    const userEcho = document.createElement('div');
    userEcho.className = 'terminal-line';
    userEcho.innerHTML = `<span class="terminal-prompt-prefix">dineshkumar@workstation:~$</span> <span class="cmd-echo">${escapeHtml(input)}</span>`;
    terminalBody.appendChild(userEcho);

    // Evaluate
    if (commands[rawCmd]) {
      const outputHtml = commands[rawCmd]();
      if (outputHtml) {
        const outDiv = document.createElement('div');
        outDiv.innerHTML = outputHtml;
        terminalBody.appendChild(outDiv);
      }
    } else {
      const errDiv = document.createElement('div');
      errDiv.className = 'terminal-line warning';
      errDiv.textContent = `bash: command not found: ${input}. Type 'help' for available commands.`;
      terminalBody.appendChild(errDiv);
    }

    // Scroll to bottom
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  function escapeHtml(text) {
    return text.replace(/[&<>"']/g, function (m) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      }[m];
    });
  }

  // Handle Enter key
  terminalInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      const cmd = terminalInput.value;
      terminalInput.value = '';
      executeCommand(cmd);
    }
  });

  // Suggestion buttons
  suggestionBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const cmd = this.getAttribute('data-cmd');
      if (cmd) {
        executeCommand(cmd);
      }
    });
  });

})();
