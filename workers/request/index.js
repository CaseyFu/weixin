const utils = require("./utils")

worker.onMessage((res) => {
    console.log("worker内部打印")
    console.log(res)
})