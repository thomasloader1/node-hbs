const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://tomas-gomez:thomasloader2323@clustertaskter-vrhoy.gcp.mongodb.net/tasker-app?retryWrites=true&w=majority', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(db => console.log(`Conectado a la Base de Datos`))
    .catch(err => console.error(err));