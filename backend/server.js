require('dotenv').config();
const express = require('express');
const app = express()
const PORT = 5000;

app.use(express.json());


app.listen(PORT, () => {
        console.log('server is running at port',PORT);
    })
