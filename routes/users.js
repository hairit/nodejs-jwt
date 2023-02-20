var express = require('express');
const router = express.Router();
const utilities = require('../utilities/jwtoptions');
const jwtInspector = require('../jwtinspector');

/* GET users listing. */
router.get('/',  function(req, res, next) {
  var token = jwtInspector.createToken({name : "Marcus Pham"}, process.env.SYMMETRIC_KEY ,utilities.defaultOptions);
  res.json(token);
});

router.get('/verifyToken/:token',  function(req, res, next) {
  const token = req.params.token.trim();
  const verifiedResult = jwtInspector.verifyToken(token,process.env.SYMMETRIC_KEY,utilities.defaultOptions);
  res.json(verifiedResult.validToken ? verifiedResult.data : "Invalid token");
});

module.exports = router;
