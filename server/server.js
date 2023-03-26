const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT ||4000;

app.use("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
})
