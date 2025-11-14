const dns2 = require('dns2');

const { Packet } = dns2;

const server = dns2.createServer({
  udp: true,
  handle: (request, send, rinfo) => {
    const response = Packet.createResponseFromRequest(request);
    const [ question ] = request.questions;
    response.answers.push({
      name: question.name,
      type: Packet.TYPE.A,
      class: Packet.CLASS.IN,
      ttl: 300,
      address: '127.0.0.1'
    });
    send(response);
  }
});

server.listen(5333, '127.0.0.1');
console.log('DNS сервер запущен на порту 5333');