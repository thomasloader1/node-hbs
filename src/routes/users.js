const router = require('express').Router();

const User = require('../models/User');

const passport = require('passport');

router.get('/users', (req, res) => {
    res.send('Users');
});

router.get('/users/signin', (req, res) => {
    res.render('users/signin');
});

router.post('/users/signin', passport.authenticate('local', {
    successRedirect: '/notes',
    failureRedirect: '/users/signin',
    failureFlash: true
}));

router.get('/users/signup', (req, res) => {
    res.render('users/signup');
});

router.post('/users/signup', async(req, res) => {
    const { name, email, password, confirm_password } = req.body;
    const errors = [];
    if (name.length <= 0) {
        errors.push({ text: 'Los campos no pueden estar vacios' });
    }
    if (password != confirm_password) {
        errors.push({ text: 'Las contrasenias deben ser identicas' });
    }
    if (password.length < 4) {
        errors.push({ text: 'La contrasenia debe de ser mayor a 4 caracteres' });
    }
    if (errors.length > 0) {
        res.render('users/signup', { errors, name, email, password, confirm_password });
    } else {
        const emailUser = await User.findOne({ email: email });
        if (emailUser) {
            req.flash('error_msg', 'El Email ya se encuentra registrado');
            res.redirect('/users/signup');
        } else {
            const newUser = new User({ name, email, password, confirm_password });
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            req.flash('success_msg', 'Registrado satisfactorio');
            res.redirect('/users/signin');
        }
    }
});

router.get('/users/profile/:id', async(req, res) => {
    const user = await User.findById(req.params.id);
    res.render('users/user-profile', { user });
});

router.get('/users/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
});
module.exports = router;