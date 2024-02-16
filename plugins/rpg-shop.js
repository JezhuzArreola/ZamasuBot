const xpperlimit = 350;
const handler = async (m, {conn, command, args}) => {
  let count = command.replace(/^buy/i, '');
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
  count = Math.max(1, count);
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count;
    global.db.data.users[m.sender].limit += count;
    conn.reply(m.chat, `
┌─「 *NOTA DE PAGO* 」
‣ *𝙲𝙾𝙼𝙿𝚁𝙰 𝙽𝙾𝙼𝙸𝙽𝙰𝙻* : + ${count}💎 
‣ *𝙶𝙰𝚂𝚃𝙾 𝚃𝙾𝚃𝙰𝙻* : -${xpperlimit * count} XP
└──────────────`, m);
  } else conn.reply(m.chat, `❗ Lo siento, no tienes suficientes *XP* para comprar *${count}* Diamantes💎`, m);
};
handler.help = ['Buy', 'Buyall'];
handler.tags = ['xp'];
handler.command = ['buy', 'buyall'];

handler.disabled = false;

export default handler;
