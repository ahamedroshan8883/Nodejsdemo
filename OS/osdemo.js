const os = require('os')

console.log("Username "+os.userInfo().username);
console.log("UserInfo "+os.userInfo().uid);
console.log("Freemem "+os.freemem());
console.log("Home directory "+os.homedir());
console.log(os.cpus());
console.log("Host name "+os.hostname());
console.log("Platform "+os.platform());
console.log("Total "+os.totalmem());
console.log("UpTime "+os.uptime());