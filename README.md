# 🤖 QUEEN-DIANA-MD WhatsApp Bot

**QUEEN-DIANA-MD** is a powerful and flexible WhatsApp Multi-Device bot built using [Baileys](https://github.com/adiwajshing/Baileys). It’s loaded with automation, media tools, moderation commands, fun features, and more — easy to deploy and fully customizable!

<p align="center">
  <img src="https://files.catbox.moe/21bevd.jpg" alt="QUEEN DIANA MD Logo" width="300"/>
</p>

---

<p align="center">
  <a href="https://heroku.com/deploy?template=https://github.com/makamesco/QUEEN-DIANA-MD">
    <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy to Heroku"/>
  </a>
  &nbsp;&nbsp;
  <a href="https://makamesco-session-site-1.onrender.com">
    <img src="https://img.shields.io/badge/Generate-Session-green?style=for-the-badge&logo=whatsapp" alt="Generate Session"/>
  </a>
  &nbsp;&nbsp;
  <a href="https://github.com/makamesco/QUEEN-DIANA-MD/archive/refs/heads/main.zip">
    <img src="https://img.shields.io/badge/Download-ZIP-blue?style=for-the-badge&logo=github" alt="Download ZIP"/>
  </a>
</p>

---

## 🌟 Features

- 🤖 Group moderation (anti-link, welcome, goodbye, etc.)
- 📥 Downloaders: YouTube, Instagram, TikTok, etc.
- 🔞 Optional NSFW menu
- 🎮 Fun games and utilities
- 📷 Screenshot, Weather, News, Forex tools
- ⚡ Lightweight, fast, and responsive

---

## ⚙️ Heroku Configuration Variables

| Variable Name     | Description                                                |
|-------------------|------------------------------------------------------------|
| `SESSION_ID`      | Your generated session string                              |
| `BOT_NAME`        | Custom bot name                                            |
| `OWNER_NAME`      | Your name or tag                                           |
| `OWNER_NUMBER`    | WhatsApp number (with country code, e.g. `2547xxxxxxxx`)   |
| `PACKNAME`        | Sticker pack name                                          |
| `AUTHOR`          | Sticker author name                                        |

Optional:
| Variable         | Description                               |
|------------------|-------------------------------------------|
| `AUTO_REPLY`     | Enable auto-response (`true` or `false`)   |
| `DATABASE_URL`   | MongoDB/Cloud DB URL (optional)           |

---

## 🧪 How to Get Session ID

1. Tap the green **Generate Session** badge above  
2. Scan the QR code with WhatsApp  
3. Copy the session string  
4. Paste it in the `SESSION_ID` config on Heroku

---

## 🛠️ Manual Setup

```bash
git clone https://github.com/makamesco/QUEEN-DIANA-MD
cd QUEEN-DIANA-MD
npm install
node index.js
