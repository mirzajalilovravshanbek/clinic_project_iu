var app = require('express')()
var http = require('http').Server(app)
require('./startup/routes')(app);
require('./startup/prod')(app);
http.listen(3030, () => {
  console.log('Listening on *:3030')
})
