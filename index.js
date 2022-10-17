const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const categories = require("./data/categories.json")

const port = process.env.PORT || 5000;


app.get("/", (req, res) => {
    res.send("Dradon server running")
})

app.get('/categories', (req , res) =>{
    res.send(categories)

})

app.listen(port, (req, res) => {
    console.log("Server is running on port", port);
})