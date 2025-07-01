import config from "../config.cjs";

const block = async (m, Matrix) => {
  try {
    const prefix = config.Prefix || config.PREFIX || ".";
    const cmd = m.body?.startsWith(prefix)
      ? m.body.slice(prefix.length).trim().split(" ")[0].toLowerCase()
      : "";
    if (cmd !== "block") return;

    const reactionEmojis = ["🔥", "💖", "🚀", "💨", "🎯", "🎉", "🌟", "💥", "🕐", "🔹"];
    const textEmojis = ["💎", "🏆", "⚡", "🎖", "🎶", "🌠", "🌀", "🔱", "🚀", "✩"];

    const reactionEmoji = reactionEmojis[Math.floor(Math.random() * reactionEmojis.length)];
    let textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];

    while (textEmoji === reactionEmoji) {
      textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];
    }

    await Matrix.sendMessage(m.from, { react: { text: "⏳", key: m.key } });

    // Check if the command is used in a DM (private chat)
    if (m.from.endsWith("@g.us")) {
      await Matrix.sendMessage(
        m.from,
        {
          text: `◈━━━━━━━━━━━━━━━━◈
│❒ Yo, ${m.pushName || "User"}, .block only works in DMs, dumbass! 😤
◈━━━━━━━━━━━━━━━━◈`,
          contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
              showAdAttribution: true,
              title: `DIANA-MD Block`,
              body: `Use in private chats only!`,
              sourceUrl: "https://github.com/makamesco/QUEEN-DIANA-MD",
              mediaType: 1,
              renderLargerThumbnail: true,
              mediaUrl: "https://files.catbox.moe/t99ajv.jpg",
              thumbnailUrl: "https://files.catbox.moe/t99ajv.jpg",
            },
          },
        },
        { quoted: m }
      );
      await Matrix.sendMessage(m.from, { react: { text: "❌", key: m.key } });
      return;
    }

    // Get the user to block (the DM partner)
    const user = m.from;
    const parts = user.split("@")[0];

    // Validate JID (just in case)
    if (!user.endsWith("@s.whatsapp.net") || parts.length < 5) {
      await Matrix.sendMessage(
        m.from,
        {
          text: `◈━━━━━━━━━━━━━━━━◈
│❒ Yo, ${m.pushName || "User"}, this chat's JID is invalid! 😤
◈━━━━━━━━━━━━━━━━◈`,
          contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
              showAdAttribution: true,
              title: `DIANA-MD Block`,
              body: `Visit DIANA-MD repository!`,
              sourceUrl: "https://github.com/makamesco/QUEEN-DIANA-MD",
              mediaType: 1,
              renderLargerThumbnail: true,
              mediaUrl: "https://files.catbox.moe/t99ajv.jpg",
              thumbnailUrl: "https://files.catbox.moe/t99ajv.jpg",
            },
          },
        },
        { quoted: m }
      );
      await Matrix.sendMessage(m.from, { react: { text: "❌", key: m.key } });
      return;
    }

    // Block the user
    await Matrix.updateBlockStatus(user, "block");

    await Matrix.sendMessage(m.from, { react: { text: textEmoji, key: m.key } });

    // Success message
    await Matrix.sendMessage(
      m.from,
      {
        text: `◈━━━━━━━━━━━━━━━━◈
│❒ ${parts} got blocked, yo! ${reactionEmoji}
◈━━━━━━━━━━━━━━━━◈`,
        contextInfo: {
          mentionedJid: [m.sender, user],
          externalAdReply: {
            showAdAttribution: true,
            title: `DIANA-MD Block`,
            body: `User blocked successfully!`,
            sourceUrl: "https://github.com/makamesco/QUEEN-DIANA-MD",
            mediaType: 1,
            renderLargerThumbnail: true,
            mediaUrl: "https://files.catbox.moe/t99ajv.jpg",
            thumbnailUrl: "https://files.catbox.moe/t99ajv.jpg",
          },
        },
      },
      { quoted: m }
    );

    await Matrix.sendMessage(m.from, { react: { text: "✅", key: m.key } });
  } catch (error) {
    console.error(`❌ Block error: ${error.message}`);
    await Matrix.sendMessage(
      m.from,
      {
        react: { text: "❌", key: m.key },
        text: `◈━━━━━━━━━━━━━━━━◈
│❒ *DIANA-MD* hit a snag blocking that user! 😡
│❒ Error: ${error.message || "Failed to block user"}
◈━━━━━━━━━━━━━━━━◈`,
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
            showAdAttribution: true,
            title: `DIANA-MD Block`,
            body: `Visit DIANA-MD repository!`,
            sourceUrl: "https://github.com/makamesco/QUEEN-DIANA-MD",
            mediaType: 1,
            renderLargerThumbnail: true,
            mediaUrl: "https://files.catbox.moe/t99ajv.jpg",
            thumbnailUrl: "https://files.catbox.moe/t99ajv.jpg",
          },
        },
      },
      { quoted: m }
    );
  }
};

export default block;