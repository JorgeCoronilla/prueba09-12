const express = require('express');
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3030;

//DB connection
const mongoose = require('mongoose');
mongoose
.connect('mongodb://127.0.0.1/cine')
.then(console.log("Connected to DB"))


// model
const Pelis = require('./models/pelis')

app.post('/api/pelis', (req, res) => {
    try {
        const { titulo, genero, director } = req.body;
        console.log(req.body.titulo)
        let newPeli = {
            titulo: titulo ,
            genero: genero,
            director: director
        }

        let insertPeli = new Pelis (newPeli)
        insertPeli.save(function(err){
            if (err) throw err;
            console.log("Inserción correcta");
            res.send();
        });
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
});


app.listen(PORT, ()=> console.log("Server connected"));