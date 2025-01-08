const express = require("express");

const app = express();

const port = 5000;

const movies = [
    {
        id: 1,
        title: "Citizen Kane",
        director: "Orson Wells",
        year: "1941",
        color: false,
        duration: 120,
    },
    {
        id: 2,
        title: "The Godfather",
        director: "Francis Ford Coppola",
        year: "1972",
        color: true,
        duration: 180,
    },
    {
        id: 3,
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        year: "1994",
        color: true,
        duration: 180,
    },
];


const welcome = (req,res) => {
    res.send("Welcome to my favourite movie list");
}
app.get("/", welcome)


const getMovies = (req, res) => {
    res.status(200).json(movies)
}
app.get("/api/movies", getMovies)


const getMovieId = (req, res) => {
    const movieId = parseInt(req.params.id, 10);
    const movie = movies.find((m) => m.id === movieId);
    if (movie) {
        res.status(200).json(movie)
    } else {
        res.status(400).send("Not Found")
    }  
};
app.get("/api/movies/:id", getMovieId);

app
    .listen(port, () => {
        console.info(`Server is listening on port ${port}`);
    })
    .on("error", (err) => {
        console.error("Error:", err.message);
    });

// const express = require('express');

// const app = express();

// const port = 5000;

// app.get("/", (req, res) => {
//     res.send("Welcome to Express");
// });

// const welcomeName = (req, res) => {
//     res.send(`Welcome ${req.params.name}`);
// };

// app.get("/users/:name", welcomeName);

// const cocktails = [
//     {
//         id: 1,
//         name: "Margarita",
//     },
//     {
//         id: 2,
//         name: "Mojito",
//     },
//     {
//         id: 3,
//         name: "Cuba Libre",
//     },
// ];

// const getCocktails = (req, res) => {
//     res.status(200).json(cocktails);
// };

// app.get("/api/cocktails", getCocktails);

// app
//     .listen(port, () => {
//         console.info(`Server is listening on port ${port}`);
//     })
//     .on("error", (err) => {
//         console.error("Error:", err.message);
//     });