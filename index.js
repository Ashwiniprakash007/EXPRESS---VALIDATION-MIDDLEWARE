
const express = require("express")
const app = express();
const fs = require("fs")
// const compression = require("compression")

// app.use(compression())
app.use(express.json())




const moviesRoutes = require("./Routes/post.routes")


app.use("/valid", moviesRoutes)


app.get("/", (req, res) => {
    res.send("Welcome page")
})


app.listen(5000, () => {
    console.log("listening at 5000")
})




