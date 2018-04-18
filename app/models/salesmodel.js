var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var salesSchema = new mongoose.Schema(
    {
    numberOfCoconut:Number,
    numberOfBatches:Number,
    dateOfAddition:Date,
    Items: [
        {
            name:String,
            noOfTrays:Number,
            noOfPackets:Number,
            ItemCost:Number,
            ItemTotalCost:Number

        }
    ]
    },
    {collection:"salesDetails"});
mongoose.model('salesDetails',salesSchema);
