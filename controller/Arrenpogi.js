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
    },
    kikiam:(req, res) =>{
        res.render('kikiam');
    },
    pisbol:(req, res) =>{
        res.render('pisbol');
    },
    bananaq:(req, res) =>{
        res.render('bananaq');
    },
    hotdog:(req, res) =>{
        res.render('hotdog');
    },
    footlong:(req, res) =>{
        res.render('footlong');
    }
};

module.exports = main;