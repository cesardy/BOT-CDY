// Créditos A Niño Piña
let handler = async (m, { conn }) => {
// No Quites Los Créditos🦌
m.react('🥵');
// Mensaje que se enviará
const message = "〔🌹 *REM - BOT* ❄️〕\n\n> *🦌BUEN DIA☀️*\n\n*BOT PARA GRUPO* :\n> wa.me/\n\n*BOT PERZONALIZADO* :\n> wa.me/573176084059";
if (m, rcanal) {
// Ara ara 😘
const imageUrl = 'https://ibb.co/q3DL7PTS';
try {
// Que No Quites Los Créditos😑
// Te Estoy Viendo😑
await conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: message, mimetype: 'image/jpeg' }, { quoted: fkontak });
} catch (error) {
console.error('Error al enviar el mensaje:', error);
}
}
}
handler.help = ['comprar'];
handler.tags = ['main'];
handler.command = ['comprar'];
export default handler;