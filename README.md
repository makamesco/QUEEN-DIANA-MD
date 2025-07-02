# 🤖 QUEEN-DIANA-MD WhatsApp Bot

**QUEEN-DIANA-MD** is a powerful, fast, and flexible WhatsApp Multi-Device bot built using [Baileys](https://github.com/adiwajshing/Baileys). It comes with group automation tools, media downloaders, fun commands, NSFW (optional), and full customizability.

![QUEEN DIANA MD Logo](https://files.catbox.moe/cxmlv1.jpg)

---

<p align="center">
  <a href="https://heroku.com/deploy?template=https://github.com/makamesco/QUEEN-DIANA-MD">
    <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy to Heroku"/>
  </a>
  &nbsp;
  <a href="https://makamesco-session-site-1.onrender.com">
    <img src="https://img.shields.io/badge/Generate-Session-green?style=for-the-badge&logo=whatsapp" alt="Generate Session"/>
  </a>
  &nbsp;
  <a href="https://github.com/makamesco/QUEEN-DIANA-MD/archive/refs/heads/main.zip">
    <img src="https://img.shields.io/badge/Download-ZIP-blue?style=for-the-badge&logo=github" alt="Download ZIP"/>
  </a>
</p>

---

## ⚙️ Required Heroku Config Vars

| Key            | Description                                                |
|----------------|------------------------------------------------------------|
| `SESSION_ID`   | From session generator site                                 |
| `BOT_NAME`     | Your bot name                                               |
| `OWNER_NAME`   | Your name or alias                                          |
| `OWNER_NUMBER` | Your WhatsApp number (e.g. `2547XXXXXXXX`)                  |
| `PACKNAME`     | Sticker pack name                                           |
| `AUTHOR`       | Sticker author name                                         |

---

## 🧩 Session ID Generation

Go to [makamesco-session-site-1.onrender.com](https://makamesco-session-site-1.onrender.com),  
scan the QR code, and copy your `SESSION_ID`.

Paste it in the Heroku config during deployment.

---

## 🛠 Manual Setup (Optional)

```bash
git clone https://github.com/makamesco/QUEEN-DIANA-MD
cd QUEEN-DIANA-MD
npm install
node index.js
