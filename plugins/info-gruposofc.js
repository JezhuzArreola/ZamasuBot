const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `𝐇𝐨𝐥𝐚 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 👋, 𝐓𝐞 𝐢𝐧𝐯𝐢𝐭𝐨 𝐚 𝐮𝐧𝐢𝐫𝐭𝐞 𝐚 𝐥𝐨𝐬 𝐠𝐫𝐮𝐩𝐨𝐬 𝐎𝐅𝐂 𝐝𝐞 𝐙𝐚𝐦𝐚𝐬𝐮 𝐁𝐨𝐭 :D

➤ 𝐆𝐫𝐮𝐩𝐨𝐬 𝐨𝐟𝐢𝐜𝐢𝐚𝐥𝐞𝐬 𝐝𝐞𝐥 𝐙𝐚𝐦𝐚𝐬:

👒 𝐆𝐑𝐔𝐏𝐎 𝐎𝐅𝐂:
 
👑 https://chat.whatsapp.com/JRNZbeszlW7EIetOBajooz 👑

👒 𝗖𝗮𝗻𝗮𝗹 𝗭𝗮𝗺𝗮𝘀:
👑 https://whatsapp.com/channel/0029VaCp29pKwqSTwQetcS2w 👑
`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/JOSTINofc/Goku-Bot-Lite`},
    'mimetype': `application/${document}`,
    'fileName': `「 𝗛𝗲𝗹𝗹𝗼 𝘄𝗼𝗿𝗹 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': global.md,
        'mediaType': 2,
        'previewType': 'pdf',
        'title': '𝙴𝙻 𝙿𝙴𝙾𝚁 𝙱𝙾𝚃 𝙳𝙴 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿⁩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'global.md'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgc', 'grupos'];
export default handler;
