const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash('error_msg', 'Necesita ingresar al sistema');
    res.redirect('/users/signin');
};
module.exports = helpers;