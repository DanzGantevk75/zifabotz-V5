let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭═══════════════════════
║╭──❉ 〔 INFO OWNER 〕 ❉────── 
║│➸ ```NAMA``` : Danzz
║│➸ ```UMUR``` : Privasi
║│➸ ```ASAL``` : Pekanbaru
║│➸ ```OFFICIAL GRUP``` :
https://chat.whatsapp.com/EmCBNEjwdOcHzRlGCXKoxK
║│➸ ```ISTAGRAM``` : Di Private😎
║│➸ ```WHATSAPP``` : http://wa.me/6288270863279
╰────────❉
`.trim(), m)
}

handler.help = ['inforozi']
handler.tags = ['main', 'utama']
handler.command = /^(inforozi)$/i

handler.exp = 150

module.exports = handler
