import fs from 'fs';
const handler = async (m, {conn, args}) => {
  const group = m.chat;
  conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
    contextInfo: {externalAdReply: {mediaUrl: null, mediaType: 1, description: null,
      title: '𝑵𝑬𝑾 𝑳𝑰𝑵𝑲 𝑮𝑹𝑶𝑼𝑷',
      body: '𝗭𝗮𝗺𝗮𝘀𝗕𝗼𝘁-𝗠𝗗',
      previewType: 0, thumbnail: fs.readFileSync('./Menu2.jpg'),
      sourceUrl: global.md}}});
};
handler.help = ['linkgroup'];
handler.tags = ['group'];
handler.command = /^link(gro?up)?$/i;
handler.group = true;
handler.botAdmin = true;
export default handler;
