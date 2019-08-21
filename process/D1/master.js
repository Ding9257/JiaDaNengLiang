const fork = require("child_process").fork;
const cpus = require('os').cpus();

for (let i = 0; i < cpus.length; i++) {
    const worker = fork('./worker');
    console.log("create worker,pid:%s ppid:%s", worker.pid, process.ppid);
}