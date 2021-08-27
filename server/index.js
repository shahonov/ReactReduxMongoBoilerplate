const express = require('express');
const cors = require('cors');

const { initDb } = require('./data/db');
const baseErrorHandler = require('./middlewares/baseErrorHandler');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/test', async (req, res) => {
    const result = await new Promise((resolve, reject) => {
        const rnd = Math.floor(Math.random() * 10);
        if (rnd > 5) {
            resolve('Hello there!');
        } else {
            resolve('Hi there!');
        }
    })

    res.send(result);
});

app.use('/', require('./routes'));
app.use(baseErrorHandler);

app.listen(port, () => {
    initDb();
    console.log(`Server is running on port ${port}`);
});
