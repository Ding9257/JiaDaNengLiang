const fork = require("child_process").fork;
const cpus = require('os').cpus();
const servce = require("net").createServer();
servce.listen(3223);

process.title = "node-master";

for (let i = 0; i < cpus.length; i++) {
    const worker = fork('./worker');
    worker.send("server",servce);
    console.log("create worker,pid:%s ppid:%s", worker.pid, process.ppid);
}