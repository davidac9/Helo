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
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 10
    }
}))

app.post('/auth/register', ctrl.register )
app.post('/auth/login', ctrl.login)
app.get('/api/posts', ctrl.showPosts)
app.get('/api/auth/me', ctrl.authMe)
app.post('/api/auth/logout', ctrl.logout)
app.post('/api/new/posts', ctrl.newPost)

massive(CONNECTION_STRING).then(db =>{
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`I just ate ${SERVER_PORT} chocolate covered tacos`))
}) 
