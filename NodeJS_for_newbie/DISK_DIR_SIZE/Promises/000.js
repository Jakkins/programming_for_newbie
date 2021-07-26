
process.on('uncaughtException', (error) => console.log(error))

let utils = require('./utils')

/**
 * arr of paths
 */
let pathsARR = ['/home/sam/Github', '/home/sam/Android', '/home/sam/000-readme', '/home/sam/Desktop']

/**
 * LV 0
 */
pathsARR.forEach(url => {
    console.log(url)
})

/**
 * still LV 0
 * 
 * sync
 */
pathsARR.forEach(url => {
    console.log(utils.getSizeDirRecursiveSync_1_0(url))
})





/**
 * https://gist.github.com/joeytwiddle/37d2085425c049629b80956d3c618971
 * "If the order doesn't matter, it may be quicker to process all the players in parallel."
 */
 async function call_all() {
    // serve ad aspettare che tutte le richieste finiscano
    await Promise.all(pathsARR.map(async (path) => {   // pathsARR MAP <---------------
        console.log(path)
        let size = utils.getSizeDirRecursiveSync_1_0(path)
        console.log(size)
    })).catch(error => {
        console.log(error)
    })
}
call_all()