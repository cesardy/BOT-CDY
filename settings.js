import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumber = '' //Ejemplo: 573218138672

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
  ['5214181450063', ' ⭕cesardy⭕ Creador 🜲', true],
  ['5217461177130',  'BOT⭕CDY', true],
 
];

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.suittag = ['524181450063'] 
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.libreria = 'Baileys'
global.baileys = 'V 6.7.16' 
global.vs = '2.2.0'
global.nameqr = '『BOT⭕CDY』'
global.namebot = '『BOT⭕CDY』'
global.sessions = 'Sessions'
global.jadi = 'JadiBots' 
global.yukiJadibts = true

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '『𝕬𝖘𝖙𝖆-𝕭𝖔𝖙』'
global.botname = '『BOT⭕CDY』'
global.wm = '『𝕬𝖘𝖙𝖆-𝕭𝖔𝖙』'
global.author = '⭕cesardy⭕'
global.dev = '⭕cesardy⭕'
global.textbot = '『𝕬𝖘𝖙𝖆-𝕭𝖔𝖙』 • Powered By ⭕cesardy⭕'
global.etiqueta = 'cesardy'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.moneda = '¥enes'
global.welcom1 = '❍ Edita Con El Comando setwelcome'
global.welcom2 = '❍ Edita Con El Comando setbye'
global.banner = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwEyPc2ZcSJLv1nKjMoNcqTD_PZl1Zk9ujraVrJSEw_efKhnurC6XGA6VOj73W-ygzfgfou1-g_3EzCX41BCiLXPvTjcIUy4BL78F9l9MuQlWAIg4E3DjO-Kx-qO-yIIhkOyeYaqDeyx8MW4EusFhzDUqID_Pk2RRUWhDfHErCquK71DBo9v4BhRjtXBNt/s736/b63bb3b9-7464-494f-937f-9aa4394cb124.jpg'
global.avatar = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwEyPc2ZcSJLv1nKjMoNcqTD_PZl1Zk9ujraVrJSEw_efKhnurC6XGA6VOj73W-ygzfgfou1-g_3EzCX41BCiLXPvTjcIUy4BL78F9l9MuQlWAIg4E3DjO-Kx-qO-yIIhkOyeYaqDeyx8MW4EusFhzDUqID_Pk2RRUWhDfHErCquK71DBo9v4BhRjtXBNt/s736/b63bb3b9-7464-494f-937f-9aa4394cb124.jpg'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*


global.md = 'https://github.com/cesardy/BOT-CDY'
global.correo = 'cdiaz8987@gmail.com'
global.cn ='https://whatsapp.com/channel/3176084059';

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363416409380841@newsletter',
}
global.multiplier = 70

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
