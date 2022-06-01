const routerApi = require('./routes');


const express = require('express'); 
/* const faker = require('faker'); */
const app = express();
const port = 5000;
routerApi(app);

/* app.use(express.static('public')); */
/* app.use(express.urlencoded({ extended: true })) */



app.listen(port, () => {
    console.log('localhost:'+port)
})
