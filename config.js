import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs';
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.owner = [
  ['51975985721', '🍃𝙹𝙾𝚂𝙴 𝙲𝚁𝙴𝙰𝙳𝙾𝚁🍃', true],
  ['529621630601', '👒𝙹𝙴𝚂𝚄𝚂 𝙰𝚁𝚁𝙴𝙾𝙻𝙰👒', true],
  ['529372293130', '👒𝚅𝙸𝚁𝚃𝙴𝚇 𝙾𝙵𝙲👒', true],
 ['584127434295']];

global.suittag =['529621630601']
global.prems =['529621630601']

global.packname = '👒𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃\n👒𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾\n👒𝚂𝙾𝙳𝙸𝙰𝙲𝙰𝙻\n👒𝙶𝚕𝚘𝚋𝚊𝚕 𝚂𝚃𝙰𝙵𝙵';
global.author = '👻Z𝙰𝙼𝙰𝚂 𝙱𝙾𝚃👻\n👻Z𝙰𝙼𝙰𝚂 𝙱𝙾𝚃👻\n☆𝙰𝚁𝙸𝙴𝚂☆\n☆ᴏᴡɴᴇʀs☆ ';
global.wm = 'ႊᐝ𖤏𝒁𝑨𝑴𝑨𝒁𝑼 𝑩𝕺𝑻 𝑴𝕯𖤏ᐝႜ';
global.titulowm = ' ႊᐝ𖤏𝒁𝑨𝑴𝑨𝒁𝑼 𝑩𝕺𝑻 𝑴𝕯𖤏ᐝႜ ';
global.titulowm2 =`ႊᐝ𖤏𝒁𝑨𝑴𝑨𝒁𝑼 𝑩𝕺𝑻 𝑴𝕯𖤏ᐝႜ`
global.igfg = 'ႊᐝ𖤏𝒁𝑨𝑴𝑨𝒁𝑼 𝑩𝕺𝑻 𝑴𝕯𖤏ᐝႜ'  ;
global.wait = '*[❗] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*';

global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6= fs.readFileSync('./Menu3.png');
global.imagen7= fs.readFileSync('./src/hjbot.jpg');
global.mods = [];

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});

//****************************
global.gp1 = 'https://whatsapp.com/channel/0029VaCp29pKwqSTwQetcS2w'
global.gp2 = 'https://chat.whatsapp.com/JRNZbeszlW7EIetOBajooz'
global.wm2 = `▸ ${dia} ${fecha}\n▸ 𝙶𝙾𝙺𝚄-𝙱𝙾𝚃-𝙻𝙸𝚃𝙴`;
global.gt = '⸸𝐙𝐀𝐌𝐀𝐒 𝐁𝐎𝐓 𝐌𝐃⸸';
global.mysticbot = '⸸𝐙𝐀𝐌𝐀𝐒 𝐁𝐎𝐓 𝐌𝐃⸸';
global.md = 'https://github.com/JOSTINofc/Goku-Bot-Lite';
global.mysticbot = 'https://github.com/JOSTINofc/Goku-Bot-Lite';
global.waitt = '*[⛔] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*';
global.waittt = '*[⛔] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*';
global.waitttt = '*[⛔] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*';
global.nomorown = '529621630601', '51975985721';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `☆ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`; // Asia/Jakarta
global.bottime = `☆𝕿 𝕴 𝕸 𝕰 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`;// America/Los_Angeles
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************
let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
