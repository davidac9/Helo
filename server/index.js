require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const ctrl = require('./controller')


const app = express()

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 10
    }
}))

app.post('/auth/register', ctrl.register )
app.post('/auth/login', ctrl.login)

massive(CONNECTION_STRING).then(db =>{
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`I just ate ${SERVER_PORT} chocolate covered tacos`))
}) 
