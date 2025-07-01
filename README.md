# 🤖 QUEEN-DIANA-MD WhatsApp Bot

**QUEEN-DIANA-MD** is a powerful and flexible WhatsApp Multi-Device bot built using [Baileys](https://github.com/adiwajshing/Baileys). It’s packed with media tools, moderation features, group automation, and more — simple to deploy and fully customizable!

<p align="center">
  <img src="https://files.catbox.moe/21bevd.jpg" alt="QUEEN DIANA MD Logo" width="300"/>
</p>

---

<p align="center">
  <a href="https://heroku.com/deploy?template=https://github.com/makamesco/QUEEN-DIANA-MD">
    <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy to Heroku"/>
  </a>
  &nbsp;
  <a href="https://makamesco-session-site-1.onrender.com">
    <img src="https://img.shields.io/badge/Generate%20Session-Click-green?style=for-the-badge&logo=whatsapp" alt="Generate Session"/>
  </a>
  &nbsp;
  <a href="https://github.com/makamesco/QUEEN-DIANA-MD/archive/refs/heads/main.zip">
    <img src="https://img.shields.io/badge/Download-ZIP-blue?style=for-the-badge&logo=github" alt="Download ZIP"/>
  </a>
</p>

---

## 🌟 Features

- 🤖 Group moderation: anti-link, welcome/goodbye messages, auto-kick
- 📥 Media tools: YouTube, TikTok, Instagram downloader
- 🛠️ Auto-reply, sticker maker, fun tools
- 🔞 Optional NSFW commands
- 📷 Screenshot, weather, forex, news
- ⚡ Lightweight, fast, and deployable in 1 click

---

## ⚙️ Heroku Setup (Environment Variables)

| Variable Name     | Description                                                |
|-------------------|------------------------------------------------------------|
| `SESSION_ID`      | Session string from QR generator                           |
| `BOT_NAME`        | Your custom bot name                                       |
| `OWNER_NAME`      | Owner/creator name                                         |
| `OWNER_NUMBER`    | WhatsApp number (with country code, e.g. `2547XXXXXXXX`)   |
| `PACKNAME`        | Sticker pack name                                          |
| `AUTHOR`          | Sticker author name                                        |

**Optional variables:**

| Variable         | Description                               |
|------------------|-------------------------------------------|
| `AUTO_REPLY`     | `true` or `false`                          |
| `DATABASE_URL`   | MongoDB URL (optional for session storage) |

---

## 🧪 Generate SESSION_ID

1. Click the green **Generate Session** badge above  
2. Scan QR code with your WhatsApp  
3. Copy the session string  
4. Paste into `SESSION_ID` on Heroku

---

## 🛠️ Manual Installation

```bash
git clone https://github.com/makamesco/QUEEN-DIANA-MD
cd QUEEN-DIANA-MD
npm install
node index.js
