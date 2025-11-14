const tls = require('tls');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
  rejectUnauthorized: false // для самоподписанных сертификатов
};

const server = tls.createServer(options, (socket) => {
  console.log('TLS клиент подключен.');
  socket.write('Добро пожаловать на защищенный сервер!');
  socket.setEncoding('utf8');
  socket.on('data', (data) => {
    console.log(`Получено: ${data}`);
  });
  socket.on('end', () => {
    console.log('TLS клиент отключен.');
  });
});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`TLS сервер запущен на порту ${PORT}`);
});