const net = require('net');
const readline = require('readline');

const client = new net.Socket();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

client.connect(2323, '127.0.0.1', () => {
  console.log('Подключено к Telnet серверу.');
});

client.on('data', (data) => {
  console.log(data.toString());
});

rl.on('line', (input) => {
  client.write(input + '\n');
});

client.on('close', () => {
  console.log('Соединение закрыто.');
  process.exit();
});