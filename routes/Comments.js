const express = require('express');
const router = express();
const axios = require('axios').default;


router.get('/getComments/:id', (req, res) => {
    const { id } = req.params;
    axios.get('https://jsonplaceholder.typicode.com/comments/' + `${id}`)
        .then((response) => {
            const data = response.data;
            if (data) {
                //   res.status(response.status).send(response.data);
                res.send(response.data);
            }
        })
        .catch((error) => {
            console.log(error);
        })
}, );


module.exports = router;