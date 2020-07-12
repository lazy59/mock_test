const {success, fail} = require('./config')

module.exports = (req, res, next) => {
    console.log(req.method)
    // if (req.url.test(/\?pageNo/))
    // req.url = req.url.replace(/\?pageNo/, '?_start')
    if (req.method === 'POST') {
        console.log(req.url)
        console.log(success.indexOf(req.url))
        console.log(fail.indexOf(req.url))
        if (success.indexOf(req.url) > -1)
        req.body.errcode = 0
        else if(fail.indexOf(req.url) > -1)
        req.body.errcode = -1
        else
        req.body.errcode = 0
        res.send(req.body)
    }
    next()

}