const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const categories = require("./data/categories.json")
const news = require("./data/news.json")

const port = process.env.PORT || 5000;


app.get("/", (req, res) => {
    res.send("Dradon server running")
})


app.get("/categories", (req , res) =>{
    res.send(categories)

})

app.get("/news", (req , res) =>{
    res.send(news)

})
app.get("/category/:id", (req , res) =>{
    const id = req.params.id;

    if(id === "08"){
        res.send(news)
    }else{
        const selectedCategory = news.filter((category) => category.category_id === id);
        res.send(selectedCategory)
    }
    

})

app.get('/news', (req, res) => {
    res.send(news)

})
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find((n) => n._id === id);
    res.send(selectedNews);
})

app.listen(port,() => {
    console.log("Server is running on port", port);
});

module.exports = app;