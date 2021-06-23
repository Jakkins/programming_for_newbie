
let date = new Date() // 2020-10-26T22:32:10.440Z
console.log(date.toISOString()) // 2020-10-26T22:32:25.958Z
let epoch = date.getTime() // 1603751545958
console.log(epoch.toString()) // 1603751545958 but string
let nonce = genNonce(epoch.toString())
console.log(nonce) // 1603751545958UNo6RVHmQGI8cGOG1ae