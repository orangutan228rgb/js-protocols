const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('error', (err) => {
  console.log(`Ошибка сервера:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`Сервер получил: ${msg} от ${rinfo.address}:${rinfo.port}`);
  server.send('Сообщение получено', rinfo.port, rinfo.address, (err) => {
    if (err) {
      console.log(err);
    }
  });
});

server.on('listening', () => {
  const address = server.address();
  console.log(`UDP сервер слушает ${address.address}:${address.port}`);
});

server.bind(41234);