/*
 * @Description:
 * @Date: 2022-08-11 18:06:52
 * @FilePath: /chat-room/server.js
 * @LastEditTime: 2022-08-12 19:27:42
 */
// server.js
const next = require("next");
const Server = require("http").Server;
const io = require("socket.io");

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
const nextApp = next({ dev, hostname, port });
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
    socketServer.on("connection", (socket) => {
      socket.on("join-room", (roomId) => {
        if (!roomId) {
          return;
        }
        socket.join(roomId);
      });
      //先写死房间
      for (const roomId of ["121212", "abc"]) {
        socket.join(roomId);
      }

      socket.on("leave-room", (roomId) => {
        console.log("离开房间", roomId);
        if (!roomId) {
          return;
        }
        socket.leave(roomId);
      });

      socket.on("send-message", (data = {}) => {
        const { message, roomId } = data;
        console.log("服务端收到的数据", data);
        //   socket.emit('update-server', data)
        // socket.broadcast.emit('update-server',message);
        socket.to(roomId).emit("update-server", message);
      });

      socket.on("disconnect", (reason) => {
        console.log("disconnect", reason);
        /* … */
      });
    });

    // start listening
    httpServer.listen(port, () => {
      console.error(
        "Web server started to listen port:",
        `http://${hostname}:${port}`
      );
    });
  })
  .catch((err) => {
    console.error("Next.js server failed to start", err);
  });
