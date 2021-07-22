const express = require('express');
const router = express();
const axios = require('axios').default;


router.post('/login', (req, res) => {
    const { email } = req.body;
    console.log("data", req.body)
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            const data = response.data
            if ((data.filter(x => x.email === email)).length > 0) {
                data.filter(x => {
                    if (x.email === email) {
                        console.log("id", x.id);
                        axios.get('https://jsonplaceholder.typicode.com/users/' + `${x.id}`).then((reponse) => {
                            res.send(reponse.data);
                        })
                    }
                })
            } else {
                console.log("data 1", "false")
                var status = "Absent"
                res.send(status);
            }

        })
        .catch((error) => {
            console.log(error);
        })
}, );


module.exports = router;