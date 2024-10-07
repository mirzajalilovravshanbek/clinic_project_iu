const client = require('../../startup/client');

function doctor(req, res, next) {
    client.get('branch_doctor', (err, data) => {
        if (err) throw err;

        if (data !== null) {
            res.send(data);
        } else {
            next();
        }
    });
}
function inspection(req, res, next) {
    client.get('branch_inspection', (err, data) => {
        if (err) throw err;

        if (data !== null) {
            res.send(data);
        } else {
            next();
        }
    });
}

module.exports = {
    doctor,
    inspection,
};