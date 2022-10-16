const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pool = require('./pool');
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));


app.get('/calendar/', (req, res)=>{
    let queryText = `SELECT * FROM "lessons-too"`
    pool.query(queryText)
    .then((response) =>{
        res.send(response.rows)
    }).catch((error)=>console.log("error with GET", error));
})


/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});
