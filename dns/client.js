const dns = require('dns');

dns.setServers(['127.0.0.1:5333']);

dns.resolve4('example.com', (err, addresses) => {
  if (err) throw err;
  console.log(`Адреса: ${JSON.stringify(addresses)}`);
});
