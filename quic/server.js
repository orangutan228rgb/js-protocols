const { createQuicSocket } = require('net');
const fs = require('fs');

const key = fs.readFileSync('key.pem');
const cert = fs.readFileSync('cert.pem');
const ca = fs.readFileSync('cert.pem');

const server = createQuicSocket({
  endpoint: { port: 12345 },
  server: { key, cert, ca, alpn: 'hello' }
});

server.on('session', (session) => {
  console.log('QUIC сессия создана.');

  session.on('stream', (stream) => {
    stream.write('Привет от QUIC сервера!');
    stream.end();
  });

  session.on('close', () => {
    console.log('QUIC сессия закрыта.');
  });
});

server.listen();