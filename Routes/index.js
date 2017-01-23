var express = require('express');
var router = express.Router();

router.route('/json');
router.get(function(rec, res){
	console.log("get the json");
	res.status(200);
	res.json({'jsondata': true});
});
router.post(function(rec, res){
	console.log("Post the json route");
	res.status(200);
	res.json({'jsondata': true});
});


module.exports = router; 