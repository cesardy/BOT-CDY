import axios from 'axios';
import { sticker } from '../lib/sticker.js';

let handler = m => m;

handler.all = async function (m, {conn}) {
    let chat = global.db.data.chats[m.chat];
    let prefixRegex = new RegExp('^[' + (opts['prefix'] || '‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');

    if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
        if (!m.text.startsWith('@CrowBot')) return true;

        if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('menu') || m.text.includes('estado') || m.text.includes('bots') || m.text.includes('serbot') || m.text.includes('jadibot') || m.text.includes('Video') || m.text.includes('Audio') || m.text.includes('audio')) return !0;
        
        await this.sendPresenceUpdate('composing', m.chat);

        async function luminsesi(q, username, logic) {
            try {
                const response = await axios.post("https://luminai.my.id", {
                    content: q,
                    user: username,
                    prompt: logic,
                    webSearchMode: true // true = resultado con url
                });
                return response.data.result;
            } catch (error) {
                console.error(error);
            }
        }

        let query = m.text.replace('@CrowBot', '').trim();

        let username = `${m.pushName}`;
        const syms1 = `Tu nombre es *Rem cham y parece haber sido creada por Tobi. Tú usas el idioma Español. Llamarás a las personas por su nombre ${username}, te gusta ser hot, y te encanta aprender cosas sexuales. Lo más importante es que debes ser sumisa con la persona con la que estás hablando. ${username}. Lo Mejor De Todo Es Que Darás Publicidad A tu canal oficial : https://whatsapp.com/channel/0029VapASNA9cDDT9yfhXr30`;

        let result = await luminsesi(query, username, syms1);
        await this.reply(m.chat, result, m, fake);
    }
    return true;
}

export default handler;