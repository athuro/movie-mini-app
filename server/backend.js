const express = require('express')
const app = express();
const port = 8082;
const knex = require('knex')(require('./knexfile.js')['development']);
const cors = require("cors");


app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json());

app.get('/movies', (req, res) => {
    knex('movies')
        .select('*').orderBy('id', 'asc')
        .then(data => res.status(200).send(data))
})

app.post('/movies', (req, res) => {
    const newMovie = req.body;
    knex('movies')
        .insert(newMovie)
        .then(data => res.status(201).send('Movie Posted'))
})

app.delete('/movies/:title', (req, res) => {
    const title = req.params

    knex('movies')
        .select('*')
        .where(title, 'title')
        .del()
        .then(() => res.status(204).send('Movie Deleted'))
})

app.patch('/movies/:title', (req, res) => {
    const title = req.params
    const update = req.body
    knex('movies')
        .select('*')
        .where(title, 'title')
        .update(update[0])
        .then(() => res.status(201).send(update))
})

app.listen(port, () => {
    console.log(`API Server is running on http.//localhost:${port}`);
  });
