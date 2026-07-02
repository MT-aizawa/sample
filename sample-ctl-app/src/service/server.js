// server.js
const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });
console.log("WebSocket server running on ws://localhost:8080");

wss.on("connection", (ws) => {
  console.log("Client connected");

  const interval = setInterval(() => {
    const now= new Date();
    const value = Math.floor(Math.random() * 100);
    ws.send(JSON.stringify({ x: new Date(), y: value ,xAxisCalloutData:now.toLocaleString('ja-JP', { hour12: false}),}));
  }, 1000);

  ws.on("close", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});
