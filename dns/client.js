const dns = require('dns');

dns.setServers(['127.0.0.1:5333']);

dns.resolve4('example.com', (err, addresses) => {
  if (err) throw err;
  console.log(`Адреса: ${JSON.stringify(addresses)}`);
});```

#### **IMAP (Internet Message Access Protocol)**

Создание полноценного IMAP-сервера — сложная задача. Здесь приведен очень упрощенный пример. Для клиента мы используем библиотеку `imap-simple`.

**Установка:**
```bash
# В папке IMAP/client
npm init -y
npm install imap-simple```

**Структура папок:**