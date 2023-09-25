const express = require('express');
const exphbs = require('express-handlebars');
const port = 5000;

const conn = require('./db/conn');

const task = require('./model/Task');

const taskRoutes = require('./routes/taskRoute')

const app = express();

//MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use('/tasks', taskRoutes);

conn.sync()
    .then(() => {
        app.listen(port);
    })
    .catch((error) => {
        console.log(error)
    });
