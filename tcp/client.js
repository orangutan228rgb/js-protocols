const net = require('net');

const client = new net.Socket();

client.connect(3000, '127.0.0.1', () => {
  console.log('Подключено к TCP серверу.');
  client.write('Привет от TCP клиента!');
});

client.on('data', (data) => {
  console.log(`Получено от сервера: ${data.toString()}`);
  client.destroy(); // Закрыть соединение после получения ответа
});

client.on('close', () => {
  console.log('Соединение закрыто.');
});

client.on('error', (err) => {
  console.error(`Ошибка соединения: ${err.message}`);
});