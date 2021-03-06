const express = require('express');
const router = require('./routes.js');
//this is meant to read and call seed for every new mongo container in docker

const app = express();
app.set('port',3003);
app.use(express.static(__dirname + '/../public'))

app.use('/climb', router)

app.listen(app.get('port'),()=> console.log(`listening on port ${app.get('port')}`))