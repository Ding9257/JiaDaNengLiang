const http = require('http');

const server = http.createServer((req, res) => {
    res.end("worker,pid" + process.pid + "  ,ppid:" + process.ppid);
});

let worker;
process.title = "node-worker";
process.on("message", function (message, sendHandle) {
    if (message === "server") {
        worker = sendHandle;
        worker.on("connection", function (socker) {
            server.emit("connection", socker)
        })
    }
});