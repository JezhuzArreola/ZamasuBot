const handler = async (m, {text, conn, usedPrefix, command}) => {
  const why = `[❗] 𝐌𝐚𝐥 𝐮𝐬𝐚𝐝𝐨, 𝐞𝐣𝐞𝐦𝐩𝐥𝐨:\n*—◉ ${usedPrefix + command} @${m.sender.split('@')[0]}*`;
  const who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false;
  if (!who) conn.reply(m.chat, why, m, {mentions: [m.sender]});
  const res = [];
  switch (command) {
    case 'blok': case 'block':
      if (who) {
        await conn.updateBlockStatus(who, 'block').then(() => {
          res.push(who);
        });
      } else conn.reply(m.chat, why, m, {mentions: [m.sender]});
      break;
    case 'unblok': case 'unblock':
      if (who) {
        await conn.updateBlockStatus(who, 'unblock').then(() => {
          res.push(who);
        });
      } else conn.reply(m.chat, why, m, {mentions: [m.sender]});
      break;
  }
  if (res[0]) conn.reply(m.chat, `[🌼] 𝗣𝗲𝗿𝗳𝗲𝗰𝘁𝗼, 𝗼𝗿𝗱𝗲𝗻 𝗲𝗷𝗲𝗰𝘂𝘁𝗮𝗱𝗮 𝘀𝗲 𝘂𝘀𝗼 ${command} 𝗽𝗮𝗿𝗮 𝗮𝗹 𝘂𝘀𝘂𝗮𝗿𝗶𝗼 ${res ? `${res.map((v) => '@' + v.split('@')[0])}` : ''}`, m, {mentions: res});
};
handler.command = /^(block|unblock)$/i;
handler.rowner = true;
export default handler;
