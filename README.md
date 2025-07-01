# 🤖 QUEEN-DIANA-MD WhatsApp Bot

**QUEEN-DIANA-MD** is a powerful and flexible WhatsApp Multi-Device bot built using [Baileys](https://github.com/adiwajshing/Baileys). Packed with tools for automation, media, moderation, games, and more — easy to deploy and highly customizable!

<p align="center">
  <img src="https://files.catbox.moe/21bevd.jpg" alt="QUEEN DIANA MD Logo" width="300"/>
</p>

---

## 🚀 Quick Access

- 🔧 **[Deploy to Heroku](https://heroku.com/deploy?template=https://github.com/makamesco/QUEEN-DIANA-MD)**
- 🧩 **[Generate Session ID](https://makamesco-session-site-1.onrender.com)**
- 📦 **[Download ZIP](https://github.com/makamesco/QUEEN-DIANA-MD/archive/refs/heads/main.zip)**

---

## 🌟 Features

- 🤖 Group moderation (anti-link, welcome, goodbye, etc.)
- 🎵 Downloaders (YouTube, Instagram, TikTok, etc.)
- 🔞 Optional NSFW Menu
- 🎮 Fun Games & Tools
- 📷 Screenshot, Weather, News, Forex
- 📡 Auto-reply, Menus, and more!

---

## ⚙️ Heroku Environment Variables

| Variable Name     | Description                                                |
|-------------------|------------------------------------------------------------|
| `SESSION_ID`      | Session string from session generator                      |
| `BOT_NAME`        | Custom bot name                                            |
| `OWNER_NAME`      | Bot owner name                                             |
| `OWNER_NUMBER`    | Bot owner's WhatsApp number (with country code)            |
| `PACKNAME`        | Sticker pack name                                          |
| `AUTHOR`          | Sticker author name                                        |

#### 🔧 Optional Variables:
| Variable         | Description                               |
|------------------|-------------------------------------------|
| `AUTO_REPLY`     | Enable auto-response (`true` or `false`)   |
| `DATABASE_URL`   | MongoDB/Cloud DB URL (optional)           |

---

## 🧪 Generate Session ID

1. Click this link → [Generate Session ID](https://makamesco-session-site-1.onrender.com)
2. Scan the QR Code with your WhatsApp
3. Copy the session string shown
4. Paste it into the `SESSION_ID` field on Heroku

---

## 🛠️ Manual Installation

```bash
git clone https://github.com/makamesco/QUEEN-DIANA-MD
cd QUEEN-DIANA-MD
npm install
node index.js
