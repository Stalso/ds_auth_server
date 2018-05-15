require("dotenv").config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const host = process.env.AUTH_APP_HOST || 'localhost';
const port = process.env.AUTH_APP_PORT || 3001;
app.use(bodyParser.json());

app.post('/auth/check_socket_token', (req, res) => {
    console.log("/auth/check_socket_token request: ", req.body);
    res.json({
        userId: Date.now(),
        clientData: { favouriteColour: "blue" },
        serverData: { role: "admin" }
    });
});

app.listen(+port, host, () => {
    console.log(`Auth server running at ${host}:${port}`)
});