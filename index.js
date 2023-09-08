const moment = require("moment")

localTime = moment()

console.log(localTime.utc().slice(0,19))
