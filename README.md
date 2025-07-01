# 🤖 QUEEN-DIANA-MD WhatsApp Bot

**QUEEN-DIANA-MD** is a powerful and flexible WhatsApp Multi-Device bot built using [Baileys](https://github.com/adiwajshing/Baileys). It’s packed with features for group management, automation, fun commands, media tools, and much more!

<p align="center">
  <img src="https://files.catbox.moe/21bevd.jpg" width="250" alt="QUEEN DIANA MD Logo"/>
</p>

---

## 🚀 Quick Deploy & Tools

| Option              | Link                                                                 |
|---------------------|----------------------------------------------------------------------|
| 🟣 Deploy to Heroku  | [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/makamesco/QUEEN-DIANA-MD) |
| 📦 Download ZIP      | [Click to Download](https://github.com/makamesco/QUEEN-DIANA-MD/archive/refs/heads/main.zip) |
| 🔑 Pair Session ID   | [Generate Session Here](https://makamesco-session-site-1.onrender.com) |

---

## 💫 Features

- ✅ Group moderation & anti-spam
- 📥 Downloader: YouTube, Instagram, Twitter, etc.
- 🎮 Fun games, NSFW content (optional)
- 🎶 Lyrics, Music, Screenshot, Weather tools
- ⚽ Football news, Forex updates
- ⚡ Fast & lightweight

---

## ⚙️ Environment Variables (Heroku Config)

Set the following variables in your **Heroku → Settings → Config Vars**:

| Variable Name     | Description                                                |
|-------------------|------------------------------------------------------------|
| `SESSION_ID`      | Your generated session ID (from session generator site)    |
| `BOT_NAME`        | The name you want for the bot                              |
| `OWNER_NAME`      | Your name or tag                                           |
| `OWNER_NUMBER`    | WhatsApp number with country code (`2547xxxxxxxx`)         |
| `PACKNAME`        | Sticker pack name                                          |
| `AUTHOR`          | Sticker author name                                        |

#### ✅ Optional:
| Variable         | Description                               |
|------------------|-------------------------------------------|
| `AUTO_REPLY`     | Enable auto-response (`true` or `false`)   |
| `DATABASE_URL`   | MongoDB/Cloud DB URL (optional)           |

---

## 🧪 How to Get `SESSION_ID`

1. Visit the [Session Generator](https://makamesco-session-site-1.onrender.com)
2. Scan the QR Code using your WhatsApp
3. Copy the generated session string
4. Paste into session.json for deployment`SESSION_ID` field

---

## 🧰 Manual Installation (For Devs)

```bash
git clone https://github.com/makamesco/QUEEN-DIANA-MD
cd QUEEN-DIANA-MD
npm install
node index.js
