var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.render('displayForm', {req: req});
});

module.exports = router;
