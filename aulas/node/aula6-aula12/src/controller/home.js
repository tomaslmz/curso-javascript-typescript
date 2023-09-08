module.exports.initial = (req, res) => {
    res.send('Início');
}

module.exports.form = (req, res) => {
    res.render('index');
}