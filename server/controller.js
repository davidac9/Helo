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
        // console.log('hi')
        if (user.length === 0) {
            return res.status(400).send({message: 'Username not found'})
        }
        // console.log('hi')
        if (username === user[0].username && password === user[0].password) {
            req.session.userid = user[0].user_id
            // console.log('hi')
            req.session.user = user[0]
            return res.status(200).send({message: 'Logged in', userid: req.session.userid, user: req.session.user, loggedIn: true})
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
    },
    authMe: async (req, res) => {
        return res.status(200).send({message: 'component happened', user: req.session.user, loggedIn: true})
    },
    logout: (req, res) => {
        req.session.destroy()
        res.status(200).send({message: 'Logged out', loggedIn: false})
    },
    newPost: async (req, res) => {
        const {user_id, content, post_image, title} = req.body
        const db = req.app.get('db')
        const newPost = await db.new_post({user_id, content, post_image, title})
        return res.status(200).send(newPost)
        
    }
}