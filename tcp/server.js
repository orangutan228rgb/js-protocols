const net = require('net');

const server = net.createServer((socket) => {
  console.log('Клиент подключен.');

  socket.on('data', (data) => {
    console.log(`Получено от клиента: ${data.toString()}`);
    socket.write(`Сервер получил: ${data.toString()}`);
  });

  socket.on('end', () => {
    console.log('Клиент отключен.');
  });

  socket.on('error', (err) => {
    console.error(`Ошибка сокета: ${err.message}`);
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`TCP сервер запущен на порту ${PORT}`);
});