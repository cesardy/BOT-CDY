let handler = async (m, { conn, usedPrefix }) => {
    const menu = `
👥 *COLABORADORES DEL BOT* 👥

╭─────────────────────╮
┃ 🎖️ *CREADOR PRINCIPAL* 🎖️
╰─────────────────────╯

👑 **CREADOR DEL BOT**
┌──────────────────┐
│ 📱 +52 418 145 0063
│ 🌐 github.com/Fer280809
│ ⭐ *Rol:* Fundador
└──────────────────┘

🤖 **ASTA_BOT FERNANDO**
┌──────────────────┐
│ 📱 +52 746 117 7130
│ 🎯 *Rol:* Bot oficial
└──────────────────┘

╭─────────────────────╮
┃ 🔥 *DESARROLLADORES* 🔥
╰─────────────────────╯

🚀 **JAVI**
📱 +52 664 786 8496
🌐 github.com/javi16-art
⚡ Desarrollo de comandos

🎨 **PABLO**
📱 +51 907 512 473
🌐 github.com/Erickztone
🎭 Creación de personajes

🤝 **NOSE**
📱 +51 927 917 562
👑 Mano derecha del creador

📢 **PAUL**
📱 +593 98 544 0092
🌐 github.com/PAYASOBOT24
🎪 Publicidad

╭─────────────────────╮
┃ 🌟 *RESUMEN* 🌟
╰─────────────────────╯

📊 *Equipo:*
• 👑 1 Creador
• 🤖 1 Bot oficial
• 💻 4 Desarrolladores

🌍 *Países:*
🇲🇽 México - 🇵🇪 Perú - 🇪🇨 Ecuador

╭─────────────────────╮
┃ 🚀 *¿SER DEVELOPER?* 🚀
╰─────────────────────╯

💡 *¡Únete al equipo!*

📝 *Aplica aquí:*
https://surveyheart.com/form/6835fa3f543db626e9bdd8a2

⚠️ *IMPORTANTE:*
• Usa información REAL
• El creador te contactará
• Buscamos talento comprometido

_Desarrollado con ❤️ por el equipo_
    `
    m.reply(menu)
}

handler.tags = ['info', 'staff']
handler.help = ['colaboradores', 'staff', 'equipo']
handler.command = ['colaboradores', 'staff', 'equipo', 'team', 'devs']
handler.group = false

export default handler

