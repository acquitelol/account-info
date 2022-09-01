const { WebSocketServer } = require('ws');
const path = require('path');
const fs = require('fs');

const wss = new WebSocketServer({ port: 9095 });

// Create dump folder if it doesn't exist
const folder = path.join(__dirname, 'dumped');
if (fs.existsSync(folder)) {
   try {
      fs.unlinkSync(folder);
   } catch (e) {
      console.log('Failed to re-make the dumped folder, please make sure no other applications are using it.');
      process.exit(-1);
   }
}

fs.mkdirSync(folder);

// Setup connection listener
wss.on('connection', (ws) => {
   console.log('WebSocket connection was made.');

   // Add a listener on the connection for any messages sent through the WebSocket
   ws.on('message', (msg) => {
      try {
         const data = JSON.parse(msg);
         if (!data?.id) return;

         fs.writeFileSync(path.join(folder, `${data.id}.json`), JSON.stringify(data, null, 2));
      } catch { }
   });
});

console.log('WebSocket is ready, you may now connect to it.');