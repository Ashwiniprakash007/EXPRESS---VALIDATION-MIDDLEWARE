
const express = require("express")
//const movies = require("movies");
const fs = require("fs")

const moviesRoutes = express.Router();


moviesRoutes.post("/valid", (req, res) => {

    const log = req.body;

    const prev_data = fs.readFileSync("./db.json", {encoding: "utf-8"})
    const parsed_prev_data = JSON.parse(prev_data)
    const movies = parsed_prev_data.movies
    movies.push(log)
    const latest_data = JSON.stringify(parsed_prev_data)
    fs.writeFileSync("./db.json", latest_data, "utf-8")

    res.send(log)
})


module.exports = moviesRoutes;