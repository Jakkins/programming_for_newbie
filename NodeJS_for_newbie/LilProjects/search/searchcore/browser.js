const { exec, spawn } = require('child_process');

class Firefox {
    launch(se, sources_arr, itemToSearch) {
        exec(`firefox --new-window '${se.url}${sources_arr[0]}${se.connector}${itemToSearch}'`)
        exec('sleep 1')
        .on("close", () => {
            for(let i=1; i<sources_arr.length; i++) {
                spawn('firefox', ['--new-tab', `${se.url}${sources_arr[i]}${se.connector}${itemToSearch}`])
            }
        })
    }
}

module.exports.Firefox = Firefox