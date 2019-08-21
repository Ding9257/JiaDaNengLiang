const http = require('http');

http.createServer((req, res) => {
    res.end("worker,pid" + process.pid + "  ,ppid:" + process.ppid);
}).listen(3112);