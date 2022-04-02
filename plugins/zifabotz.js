let handler = async (m, { conn }) => {
let caption = `JANGAN TAG BANH, MUMPUNG LAGI PUASA GUA SABARIN AJA KALO GK UDH GUA...`

conn.sendButton( m.chat, caption, `DanzBot`, `DanzBot`, `.menu`, m)

       }
       
handler.customPrefix = /^(bot|botwa|robotwa|robot)/i
handler.command = new RegExp
module.exports = handler
