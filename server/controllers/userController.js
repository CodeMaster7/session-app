module.exports = {
    read(req, res) {
        console.log('user controller, read')
        res.status(200).send(req.session.user)
    }
}