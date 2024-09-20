const main = {
    index:(req, res) =>{
        res.render('index');
    },
    about:(req, res) =>{
        res.render('about');
    },
    contact:(req, res) =>{
        res.render('contact');
    },
    info:(req, res) =>{
        res.render('info');
    },
    settings:(req, res) =>{
        res.render('settings');
    }
};

module.exports = main;