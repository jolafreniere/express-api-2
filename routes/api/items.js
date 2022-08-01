var mongoose = require('mongoose');
var router = require('express').Router();
require('../../models/Item');
var Item = mongoose.model('Item');


if(process.env.ENVIRONMENT = "DEV"){
  Item.deleteOne({"name": "test"})
}
router.get("/", function(req, res) {
    Item.find().then(function(items) {
        res.statusCode=200;
        return res.json({ items: items });
    })
});

router.post('/',async function(req, res){
    
    let product = await Item.exists({name: "test"})
    if(product){
        res.statusCode = 400;
        res.send("Item already exists");
      } else {
        const newItem = new Item({
          name: "test"
        });
        res.statusCode = 200;
        newItem.save().then((item) => {res.send(item)});
      }
    })


module.exports = router;