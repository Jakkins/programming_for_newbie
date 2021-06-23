
const { exec } = require('child_process');

const ls = exec("node ./Server/server");

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
    console.error(`ERROR: ${data}`);
});

ls.on('error', (err) => {
    console.error('Failed to start subprocess.');
});

ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});