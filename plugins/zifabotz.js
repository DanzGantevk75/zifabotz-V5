let handler = async (m, { conn }) => {
let caption = `NGAPAIN OM? `

conn.sendButton( m.chat, caption, `DanzBot`, `DanzBot`, `.menu`, m)

       }
       
handler.customPrefix = /^(bot|botwa|robotwa|robot)/i
handler.command = new RegExp
module.exports = handler
