let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.botwm
let str = `
╭═══════════════════════
║╭──❉ 〔 DanzBot 〕 ❉────── 
║│➸ *_Group Official DanzBot_*
║│➸  *https://chat.whatsapp.com/EmCBNEjwdOcHzRlGCXKoxK*
╰─────────❉
▌│█║▌║▌║║▌║▌║█│▌
Gc Bot Cuma 1 Selain Itu Peniru! 
`.trim()
conn.sendButton(m.chat, str, `${botol}`, `⋮☰ Menu`, `.menu`, m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

module.exports = handler
