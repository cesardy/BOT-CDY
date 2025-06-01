import moment from 'moment-timezone';

let handler = async (m, { conn, args }) => {
    let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
    let user = global.db.data.users[userId];
    let name = conn.getName(userId);
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let totalreg = Object.keys(global.db.data.users).length;
    let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length;
    
    let txt = `
    ✦...*BIENENIDO*...✦
    ✦@${userId.split('@')[0]}✦

> ✰ Hola! Me llamo ✰
*${botname}*  

╭──────────┈ ↷
│ *❀ Modo BOT* »
│      Privado 
│ *✦ Bot* »
│    ${(conn.user.jid == global.conn.user.jid ? 'Principal 🅥' : 'Sup Bot🅑')}
│ *ⴵ Activada* »
│  ${uptime}
│ *✰ Total de usuarios* »
│     ${totalreg}
│ *✧ Total de Comandos* »
│  ${totalCommands}
╰─────────────

> ❍ Se bot en el grupo oficial del bot 

> ❍ Crea un *Sub-Bot* con tu número utilizando *#qr* o *#code*



• :･ﾟ⊹˚• \`『 𝑁𝑆𝐹𝑊 』\` •˚⊹:･ﾟ•

❍ 𝐶𝑜𝑚𝑎𝑛𝑑𝑜𝑠 𝑁𝑆𝐹𝑊 (𝐶𝑜𝑛𝑡𝑒𝑛𝑖𝑑𝑜 𝑝𝑎𝑟𝑎 𝑎𝑑𝑢𝑙𝑡𝑜𝑠)
ᰔᩚ *#𝑎𝑛𝑎𝑙* + <𝑚𝑒𝑛𝑐𝑖𝑜𝑛>
> ✦ 𝐻𝑎𝑐𝑒𝑟 𝑢𝑛 𝑎𝑛𝑎𝑙
ᰔᩚ *#𝑤𝑎𝑖𝑓𝑢*
> ✦ 𝐵𝑢𝑠𝑐𝑎 𝑢𝑛𝑎 𝑤𝑎𝑖𝑓𝑢 𝑎𝑙𝑒𝑎𝑡𝑜𝑟𝑖𝑜.
ᰔᩚ *#𝑏𝑎𝑡ℎ* + <𝑚𝑒𝑛𝑐𝑖𝑜𝑛>
> ✦ 𝐵𝑎ñ𝑎𝑟𝑠𝑒
ᰔᩚ *#𝑏𝑙𝑜𝑤𝑗𝑜𝑏 • #𝑚𝑎𝑚𝑎𝑑𝑎 • #𝑏𝑗* + <𝑚𝑒𝑛𝑐𝑖𝑜𝑛>
> ✦ 𝐷𝑎𝑟 𝑢𝑛𝑎 𝑚𝑎𝑚𝑎𝑑𝑎
ᰔᩚ *#𝑏𝑜𝑜𝑏𝑗𝑜𝑏* + <𝑚𝑒𝑛𝑐𝑖𝑜𝑛>
> ✦ 𝐻𝑎𝑐𝑒𝑟 𝑢𝑛𝑎 𝑟𝑢𝑠𝑎
ᰔᩚ *#𝑐𝑢𝑚* + <𝑚𝑒𝑛𝑐𝑖𝑜𝑛>
> ✦ 𝑉𝑒𝑛𝑖𝑟𝑠𝑒 𝑒𝑛 𝑎𝑙𝑔𝑢𝑖𝑒𝑛.
ᰔᩚ *#𝑓𝑎𝑝* + <𝑚𝑒𝑛𝑐𝑖𝑜𝑛>
> ✦ 𝐻𝑎𝑐𝑒𝑟𝑠𝑒 𝑢𝑛𝑎 𝑝𝑎𝑗𝑎
ᰔᩚ *#𝑝𝑝𝑐𝑜𝑢𝑝𝑙𝑒 • #𝑝𝑝𝑐𝑝*
> ✦ 𝐺𝑒𝑛𝑒𝑟𝑎 𝑖𝑚𝑎𝑔𝑒𝑛𝑒𝑠 𝑝𝑎𝑟𝑎 𝑎𝑚𝑖𝑠𝑡𝑎𝑑𝑒𝑠 𝑜 𝑝𝑎𝑟𝑒𝑗𝑎𝑠.
ᰔᩚ *#𝑓𝑜𝑜𝑡𝑗𝑜𝑏* + <𝑚𝑒𝑛𝑐𝑖𝑜𝑛>
> ✦ 𝐻𝑎𝑐𝑒𝑟 𝑢𝑛𝑎 𝑝𝑎𝑗𝑎 𝑐𝑜𝑛 𝑙𝑜𝑠 𝑝𝑖𝑒𝑠
ᰔᩚ *#𝑓𝑢𝑐𝑘 • #𝑐𝑜𝑔𝑒𝑟 • #𝑓𝑢𝑐𝑘2* + <𝑚𝑒𝑛𝑐𝑖𝑜𝑛>
> ✦ 𝐹𝑜𝑙𝑙𝑎𝑟𝑡𝑒 𝑎 𝑎𝑙𝑔𝑢𝑖𝑒𝑛
ᰔᩚ *#𝑐𝑎𝑓𝑒 • #𝑐𝑜𝑓𝑓𝑒*
> ✦ 𝑇𝑜𝑚𝑎𝑡𝑒 𝑢𝑛 𝑐𝑎𝑓𝑒𝑐𝑖𝑡𝑜 𝑐𝑜𝑛 𝑎𝑙𝑔𝑢𝑖𝑒𝑛
ᰔᩚ *#𝑣𝑖𝑜𝑙𝑎𝑟 • #𝑝𝑒𝑟𝑟𝑎 + <𝑚𝑒𝑛𝑐𝑖𝑜𝑛>
> ✦ 𝑉𝑖𝑜𝑙𝑎 𝑎 𝑎𝑙𝑔𝑢𝑖𝑒𝑛
ᰔᩚ *#𝑔𝑟𝑎𝑏𝑏𝑜𝑜𝑏𝑠* + <𝑚𝑒𝑛𝑐𝑖𝑜𝑛>
> ✦ 𝐴𝑔𝑎𝑟𝑟𝑟𝑎𝑟 𝑡𝑒𝑡𝑎𝑠
ᰔᩚ *#𝑔𝑟𝑜𝑝* + <𝑚𝑒𝑛𝑐𝑖𝑜𝑛>
> ✦ 𝑀𝑎𝑛𝑜𝑠𝑒𝑎𝑟 𝑎 𝑎𝑙𝑔𝑢𝑖𝑒𝑛
ᰔᩚ *#𝑙𝑖𝑐𝑘𝑝𝑢𝑠𝑠𝑦* + <𝑚𝑒𝑛𝑐𝑖𝑜𝑛>
> ✦ 𝐿𝑎𝑚𝑒𝑟 𝑢𝑛 𝑐𝑜ñ𝑜
ᰔᩚ *#𝑟𝑢𝑙𝑒34 • #𝑟34* + [𝑇𝑎𝑔𝑠]
> ✦ 𝐵𝑢𝑠𝑐𝑎𝑟 𝑖𝑚𝑎𝑔𝑒𝑛𝑒𝑠 𝑒𝑛 𝑅𝑢𝑙𝑒34
ᰔᩚ *#𝑠𝑖𝑥𝑛𝑖𝑛𝑒 • #69* + <𝑚𝑒𝑛𝑐𝑖𝑜𝑛>
> ✦ 𝐻𝑎𝑧 𝑢𝑛 69 𝑐𝑜𝑛 𝑎𝑙𝑔𝑢𝑖𝑒𝑛
ᰔᩚ *#𝑠𝑝𝑎𝑛𝑘 • #𝑛𝑎𝑙𝑔𝑎𝑑𝑎* + <𝑚𝑒𝑛𝑐𝑖𝑜𝑛>
> ✦ 𝐷𝑎𝑟 𝑢𝑛𝑎 𝑛𝑎𝑙𝑔𝑎𝑑𝑎
ᰔᩚ *#𝑠𝑢𝑐𝑘𝑏𝑜𝑜𝑏𝑠* + <𝑚𝑒𝑛𝑐𝑖𝑜𝑛>
> ✦ 𝐶ℎ𝑢𝑝𝑎𝑟 𝑡𝑒𝑡𝑎𝑠
ᰔᩚ *#𝑢𝑛𝑑𝑟𝑒𝑠𝑠 • #𝑒𝑛𝑐𝑢𝑒𝑟𝑎𝑟* + <𝑚𝑒𝑛𝑐𝑖𝑜𝑛>
> ✦ 𝐷𝑒𝑠𝑛𝑢𝑑𝑎𝑟 𝑎 𝑎𝑙𝑔𝑢𝑖𝑒𝑛
ᰔᩚ *#𝑦𝑢𝑟𝑖 • #𝑡𝑖𝑗𝑒𝑟𝑎𝑠* + <𝑚𝑒𝑛𝑐𝑖𝑜𝑛>
> ✦ 𝐻𝑎𝑐𝑒𝑟 𝑡𝑖𝑗𝑒𝑟𝑎𝑠.



. 
  `.trim();

  await conn.sendMessage(m.chat, { 
      text: txt,
      contextInfo: {
          mentionedJid: [m.sender, userId],
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
              newsletterJid: channelRD.id,
              newsletterName: channelRD.name,
              serverMessageId: -1,
          },
          forwardingScore: 999,
          externalAdReply: {
              title: botname,
              body: textbot,
              thumbnailUrl: banner,
              mediaType: 1,
              showAdAttribution: true,
              renderLargerThumbnail: true,
          },
      },
  }, { quoted: m });

};

handler.help = ['menu+'];
handler.tags = ['main'];
handler.command = ['menu18', 'menu+', 'help18', 'help+'];

export default handler;

function clockString(ms) {
    let seconds = Math.floor((ms / 1000) % 60);
    let minutes = Math.floor((ms / (1000 * 60)) % 60);
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    return `${hours}h ${minutes}m ${seconds}s`;
}
