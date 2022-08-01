var mongoose = require('mongoose');
var router = require('express').Router();
var Item = mongoose.model('Item');

router.get("/items", function(req, res, next) {
    Item.find().then(function(items) {
        res.statusCode=200;
        return res.json({ items: items });
    }).catch(next);
});

router.post('/items', function(req, res, next){
    var itm = new Item();
    itm.name = req.body.name;
    console.log(itm);

    itm.save().then(function(){
      return res.json({item: itm});
    }).catch(next);
  });

module.exports = router;