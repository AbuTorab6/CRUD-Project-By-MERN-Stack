let mongoose = require('mongoose');

var productSchema = new mongoose.Schema(
    {
        productName : {type:String},
        productCode : {type:String},
        image : {type:String},
        unitPrice : {type:String},
        quantity : {type:String},
        totalPrice : {type:String},
        createdDate : {type:Date,default:Date.now()}
    },
    {
        versionKey:false
    }
)


var productModel = mongoose.model('product',productSchema);

module.exports = productModel;