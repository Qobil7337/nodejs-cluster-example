import express from 'express';
import os from 'os';

const app = express();
const port = 3000;

app.get('/heavy', (req, res) => {
    let total = 0;
    for (let i = 0; i < 50_000_000; i++) {
        total ++;
    }
    res.send(`The result of CPU intensive task is ${total}`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
    console.log(`Worker ${process.pid} started`);
    console.log(`cpuCount: ${os.cpus().length}`);
});
