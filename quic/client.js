const { createQuicSocket } = require('net');
const fs = require('fs');

const key = fs.readFileSync('key.pem');
const cert = fs.readFileSync('cert.pem');
const ca = fs.readFileSync('cert.pem');

const client = createQuicSocket({
  client: { key, cert, ca, alpn: 'hello' }
});

const req = client.connect({
  address: 'localhost',
  port: 12345
});

req.on('stream', (stream) => {
  stream.on('data', (data) => {
    console.log(`Получено от сервера: ${data.toString()}`);
  });
  stream.on('end', () => {
    console.log('Поток завершен.');
    client.close();
  });
});

req.on('secure', () => {
  console.log('QUIC соединение установлено.');
});