const tls = require('tls');
const fs = require('fs');

const options = {
  ca: [ fs.readFileSync('cert.pem') ],
  rejectUnauthorized: false // для самоподписанных сертификатов
};

const client = tls.connect(8000, 'localhost', options, () => {
  console.log('Подключено к TLS серверу.');
  client.write('Привет от TLS клиента!');
});

client.on('data', (data) => {
  console.log(`Получено: ${data.toString()}`);
  client.end();
});

client.on('close', () => {
  console.log('Соединение закрыто.');
});

client.on('error', (error) => {
  console.error(error);
});