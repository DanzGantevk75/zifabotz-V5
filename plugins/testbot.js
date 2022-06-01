let handler = async (m, { conn }) => {
let caption = `Afahj Nich Fasti Tes Jaringan`

conn.sendButton( m.chat, caption, `©️ DanzBot`, `BISA DANZ`, `.Nice😎☝`, m)

       }
       
handler.customPrefix = /^(tes)/i
handler.command = new RegExp
module.exports = handler
