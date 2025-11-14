const dgram = require('dgram');
const client = dgram.createSocket('udp4');
const message = Buffer.from('Привет от UDP клиента!');

client.send(message, 41234, 'localhost', (err) => {
  if (err) {
    console.log(err);
    client.close();
  }
});

client.on('message', (msg, rinfo) => {
  console.log(`Клиент получил: ${msg} от ${rinfo.address}:${rinfo.port}`);
  client.close();
});