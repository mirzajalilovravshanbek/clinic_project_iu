const db = require('../db/db-sequelize');

module.exports = async function(){
    //await db.sync();
    db.authenticate()
    .then(() => {
        console.log('Baza bilan aloqa ulandi');
    })
    // .catch(err => { Global exceptio hadler borligi uchun
    //     console.error('Baza bilan aloqa uzildi xatolik ->:', err);
    // });
}