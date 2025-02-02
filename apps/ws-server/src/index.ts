import { WebSocketServer } from "ws";
import { prisma } from "@repo/db/client";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);
  prisma.user.create({
    data: {
      email: Math.random().toString(),
      password: Math.random().toString(),
    },
  });

  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });

  ws.send("something");
});
