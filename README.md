# 🤖 QUEEN-DIANA-MD WhatsApp Bot

**QUEEN-DIANA-MD** is a powerful and flexible WhatsApp MD bot built with [Baileys](https://github.com/adiwajshing/Baileys) and enhanced for ease of deployment and scalability. Designed for fun, group management, media tools, games, automation, and more!

<p align="center">
  <img src="https://files.catbox.moe/sigghy.jpg" width="250" alt="Bot logo"/>
</p>

## 💫 Features

- Group moderation tools
- Auto-reply, welcome/goodbye messages
- Downloader (YT, IG, Twitter, etc.)
- Fun games and NSFW menu
- Lyrics, screenshot, and weather tools
- Forex & news fetcher
- Lightweight and fast performance

## 🔗 Official Repository

> 🔗 [GitHub Repo](https://github.com/makamesco/QUEEN-DIANA-MD)

---

## 🚀 Deploy on Heroku (Easy Method)

You can deploy QUEEN-DIANA-MD with just one click to **Heroku**.

### 🔘 One-Click Deploy

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/makamesco/QUEEN-DIANA-MD)

---

## ⚙️ Environment Variables

After deploying, configure the following environment variables in Heroku:

| Variable Name     | Description                                                |
|-------------------|------------------------------------------------------------|
| `SESSION_ID`      | Your session ID string (generated from your session site)  |
| `BOT_NAME`        | The name of your bot                                       |
| `OWNER_NAME`      | Your name or owner tag                                     |
| `OWNER_NUMBER`    | WhatsApp number with country code (e.g. `2547xxxxxxxx`)     |
| `PACKNAME`        | Sticker pack name                                          |
| `AUTHOR`          | Sticker author name                                        |

### ✅ Optional Variables

| Variable         | Description                               |
|------------------|-------------------------------------------|
| `AUTO_REPLY`     | `true` or `false` to enable auto-reply     |
| `DATABASE_URL`   | MongoDB/Cloud DB URL (optional)           |

---

## 🧪 How to Generate `SESSION_ID`

You can generate a session ID from:

**Session Generator:**  
🔗 [Makamesco Session Site](https://makamesco-session-site-1.onrender.com)

1. Scan QR code with your WhatsApp
2. Copy the session string
3. Paste it into `SESSION_ID` on Heroku config

---

## 🛠️ Manual Installation (Optional)

```bash
# Clone the repo
git clone https://github.com/makamesco/QUEEN-DIANA-MD
cd QUEEN-DIANA-MD

# Install dependencies
npm install

# Run bot
node index.js
