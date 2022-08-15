var express = require('express');
var router = express.Router();
var playlist = require('../models').playlist;

router.get('/', function(req, res, next) {
  res.json({
    msg: "MuterKaset REST API by GHOST"
  });
});

router.get('/list', async (req, res, next) => {
  try {
    const list = await playlist.findAll();
    if (list.length > 0) {
      res.json({
        data: list
      });
    }else {
      res.json({
        data: "kosong"
      })
    }
  }catch(err) {
    res.json({
      data: err
    });
  }
});

router.get('/list/:params', (req, res, next) => {
  const path = req.protocol+'://'+req.headers.host+'/videos/'+req.params.params+'.mp4'
  res.json({
    data: path
  });
});

module.exports = router;
