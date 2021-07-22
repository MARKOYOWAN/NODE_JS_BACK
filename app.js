const express = require("express");
const mysql = require("mysql");
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const app = express();
dotenv.config({ path: './.env' });

const corsOptions = {
    origin: '*'
}
app.use(cors(corsOptions));
app.use(express.json());


//-------Connection avec la base de donnée---------
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
});

app.use('/auth', require('./routes/LoginRoute'));
app.use('/user', require('./routes/UserRoute'));
app.use('/comment', require('./routes/Comments'));
app.use('/post', require('./routes/postRoute'));


app.post('*', (req, res) => {
    const nom = req.body.nom;
    const user = { name: nom };

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken })
})


// --------Port du server------------------
app.listen(process.env.PORT);