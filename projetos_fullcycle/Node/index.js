const express = require("express");
const app = new express();
const port = 3000

app.get('/', (req, res) => {res.send('<h1>Full Cycle</h1>')})
app.listen(port, () => {
    console.log("Server running on 3000");
});