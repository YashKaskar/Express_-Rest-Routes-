const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json()) // for parsing application/json

app.listen(8080, () => {    
    console.log('Listening on the Port 8080')
})