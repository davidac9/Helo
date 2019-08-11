module.exports = {
    register: async (req, res) => {
        const {username, password} = req.body
        const db = req.app.get('db')

        const check_Name = await db.find_username([username])
        if(check_Name.length > 0) {
            return res.status(400).send({message: 'Username in use'})
        }
        const newUser = await db.insert_user({username, password})
        req.session.user = newUser[0]
        return res.status(200).send({message: 'Logged in', user: req.session.user, loggedIn: true})

    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const user = await db.find_username([username])
        if (user.length === 0) {
            return res.status(400).send({message: 'Username not found'})
        }
        if (username === user[0].username && password === user[0].password) {
            req.session.user = user[0]
            return res.status(200).send({message: 'Logged in', user: req.session.user, loggedIn: true})
        }
    },
    showPosts: async (req, res) => {
        const db = req.app.get('db')
        if (req.query.post_id) {
            const posts = await db.search_post_id(`${req.query.post_id}`)
            return res.status(200).send(posts)
        }
        const posts = await db.search_posts(`%${req.query.title}%`)
        return res.status(200).send(posts)
    }
}