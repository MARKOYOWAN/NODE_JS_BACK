const express = require('express');
const router = express();
const axios = require('axios').default;


router.get('/getuser', (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            res.status(response.status).send(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
}, );


module.exports = router;