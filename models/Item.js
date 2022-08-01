var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    }
});

mongoose.model('Item', ItemSchema);