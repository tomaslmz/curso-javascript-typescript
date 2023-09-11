module.exports.initial = (req, res) => {
    res.render('index', {
        title: 'This is a title',
        description: 'This is a description'
    });
    return;
}

module.exports.form = (req, res) => {
    res.send(req.body);
    return;
}