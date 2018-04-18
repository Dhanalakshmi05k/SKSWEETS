var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
var ElectionResultSchema = new mongoose.Schema(
{
      name:String,
      phone:Number,
      costOfBig:Number,
      costOfSmall:Number,
      costOfLaddu:Number,
      rupees:Number,
      gstNumber:Number
},
{collection:"reports"});
mongoose.model('reports',ElectionResultSchema);