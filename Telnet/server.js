const net = require('net');

const server = net.createServer((socket) => {
  console.log('Telnet клиент подключен.');
  socket.write('Добро пожаловать на Telnet сервер!\n');

  socket.on('data', (data) => {
    const message = data.toString().trim();
    console.log(`Получено от клиента: ${message}`);

    if (message === 'exit') {
      socket.end('Пока!\n');
    } else {
      socket.write(`Вы сказали: ${message}\n`);
    }
  });

  socket.on('end', () => {
    console.log('Telnet клиент отключен.');
  });
});

const PORT = 2323;
server.listen(PORT, () => {
  console.log(`Telnet сервер запущен на порту ${PORT}`);
});