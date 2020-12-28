const express = require('express');
const router = express.Router();
const mysql = require("mysql");
const moment = require('moment');
const crypto = require("crypto");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "auth",
    password: "12345678"
});

connection.connect();

//прослушка GET-запросов по адресу localhost3000/api/users
router.get('/', function (req, res, next) {
    connection.query('SELECT * FROM users', function (err, result) {
        res.send({...result})

        console.log(err);
        console.log(result); // собственно данные
    });
})

//прослушка POST-запросов по адресу localhost3000/api/users
router.post('/register', function (req, res, next) {

    let passwordHash = crypto.createHash('sha256').update(req.body.password).digest('hex')

    // если регистрация
    let data = [req.body.name, req.body.email, req.body.status, moment().format('YYYY-MM-DD HH:mm:ss'), moment().format('YYYY-MM-DD HH:mm:ss'), passwordHash];
    connection.query('INSERT INTO users(name, email, status, registrationdate, lastLogin, password) VALUES(?, ?, ?, ?, ?, ?) ', data, function (err, results, fields) {
        !err ? res.json(results) : res.json(err);
        // PLEASE, DEAR EVE, RETURN HERE SESSION, please UwU
    })
})

router.post("/login", (req, res, next) => {
    console.log(req.body)
    let passwordHash = crypto.createHash('sha256').update(req.body.password).digest('hex')
    connection.query('SELECT id FROM users WHERE email = ? AND password = ?', [req.body.email, passwordHash], function (err, results) {
        if (err || !results || !results.length) {
            res.status(401).send("Bad credentials")
            return
        }
        let userId = results[0].id
        let sessionId = crypto.randomBytes(32).toString('hex');
        connection.query("INSERT INTO sessions(id, userId, lastEntrance) VALUES(?, ?, ?);", [sessionId, userId, moment().format('YYYY-MM-DD HH:mm:ss')])
        res.json({"session": sessionId})
    })

})

module.exports = router;
