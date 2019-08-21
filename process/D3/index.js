const spawn = require('child_process').spawn;
const child  = spawn("echo",['啦啦啦啦啦']);
child.stdout.pipe(process.stdout);
