const client = require('../../startup/client');

function byId(req, res, next) {
    client.get('initial_balance_' + req.params.id, (err, data) => {
        if (err) throw err;

        if (data !== null) {
            res.send(data);
        } else {
            next();
        }
    });
}

module.exports = {
    byId,
};