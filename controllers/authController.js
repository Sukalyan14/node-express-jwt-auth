const signup_get = (req , res) => {
    res.render('signup')
}

const login_get = (req , res) => {
    res.render('signup')
}

const signup_post = (req , res) => {
    res.send('new signup')
}

const login_post = (req , res) => {
    res.send('user login')
}

module.exports = { signup_get , login_get , signup_post , login_post }