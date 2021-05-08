const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

require('./app/login.js')(app);
require('./app/register.js')(app);
require('./app/users.js')(app);

app.listen('3002', () => {
    console.log('Server started in port 3002');
});