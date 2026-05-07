const { Client } = require('discord.js-selfbot-v13');
const http = require('http');

const port = process.env.PORT || 8080; 
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write("Bot is Alive!");
  res.end();
}).listen(port, () => {
  console.log(`Web server running on port ${port}`);
});

const client = new Client({
  checkUpdate: false,
});

client.on('ready', () => {
  console.log(`[${new Date().toLocaleTimeString()}] Login sukses sebagai: ${client.user.tag}`);
  
  client.user.setPresence({ status: 'online' });
});

const token = process.env.TOKEN;

if (!token) {
  console.error("EROR: Token tidak ditemukan! Pastikan sudah setting Environment Variable.");
  process.exit(1);
}

client.login(token).catch(err => {
  console.error("Gagal login! Token mungkin salah atau expired.");
});