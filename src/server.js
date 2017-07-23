const express = require('express');
const app = express();

app.get('/', (req, res) => res.status(200).send('Hello Wolrd'));

app.listen(9090, () => console.log('Express running at PORT: 9090.'));
