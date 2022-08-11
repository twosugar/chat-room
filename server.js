/*
 * @Description:
 * @Date: 2022-08-11 18:06:52
 * @FilePath: /chat-room/server.js
 * @LastEditTime: 2022-08-11 19:52:55
 */
// server.js
const next = require('next')
const Server = require('http').Server
const io = require("socket.io") ;

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000
const nextApp = next({ dev, hostname, port })
const handler = nextApp.getRequestHandler();

nextApp
  .prepare()
  .then(async () => {
    // create http server
    const httpServer = new Server((req, res) => {
      handler(req, res);
    });

    // create Socket.io server
    const socketServer = io(httpServer);
    socketServer.on("connection", (client) => {
        client.on("send-message", (data) => {
          console.log("测试", data);
          client.emit('update-server', data)
          client.broadcast.emit('update-server',data);
        });
        client.on("disconnect", () => {
          /* … */
        });
      });

    // start listening
    httpServer.listen(port, () => {
      console.error("Web server started to listen port:", port);
    });
  })
  .catch((err) => {
    console.error("Next.js server failed to start", err);
  });