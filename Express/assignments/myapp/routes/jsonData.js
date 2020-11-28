const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

router.post('/', ((req, res) => {
    console.log("jsonData")
    console.log(req.body)
    res.render('displayJSON',{req: req})
}))

module.exports = router;