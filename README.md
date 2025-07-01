# 🤖 QUEEN-DIANA-MD WhatsApp Bot

**QUEEN-DIANA-MD** is a powerful, fast, and flexible WhatsApp Multi-Device bot built using [Baileys](https://github.com/adiwajshing/Baileys). It comes with group automation tools, media downloaders, fun commands, NSFW (optional), and full customizability.

![QUEEN DIANA MD Logo](https://files.catbox.moe/21bevd.jpg)

---

## 🚀 Deploy to Heroku

Click the button below to deploy QUEEN-DIANA-MD to Heroku in 1 click.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/makamesco/QUEEN-DIANA-MD)

---

## 🧩 Generate Session ID

Before deploying, generate a session ID:

👉 Visit: **https://makamesco-session-site-1.onrender.com**  
Scan the QR code with WhatsApp and copy your session string.

Use it in Heroku as the value for `SESSION_ID`.

---

## ⚙️ Required Heroku Config Vars

| Key            | Value Description                                         |
|----------------|-----------------------------------------------------------|
| `SESSION_ID`   | Session string you get from the session generator site    |
| `BOT_NAME`     | Name of your bot (e.g., Diana-MD)                         |
| `OWNER_NAME`   | Your name or alias                                        |
| `OWNER_NUMBER` | Your WhatsApp number with country code (e.g., 2547xxxxxx) |
| `PACKNAME`     | Name for your sticker pack                                |
| `AUTHOR`       | Author name for stickers                                  |

---

## 🛠 Manual Installation (Advanced)

```bash
git clone https://github.com/makamesco/QUEEN-DIANA-MD
cd QUEEN-DIANA-MD
npm install
node index.js
