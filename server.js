'use strict';

const express = require('express');
const app = express();
require('ejs');

const superagent = require('superagent');
const PORT = 3000;
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded());

app.get('/', getForm);

function getForm(request, response) {
  response.render('pages/index');
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
