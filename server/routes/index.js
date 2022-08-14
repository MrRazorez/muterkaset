var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({
    msg: "MuterKaset REST API by GHOST"
  })
});

router.get('/:params', (req, res, next) => {
  res.json({
    data: req.params
  })
});

module.exports = router;
