const express = require ("express");
const app = express();


app.get("/", (req, res) => {
    res.send("Im the home page");
})





app.listen(3000, () => {
    console.log("server up");
})