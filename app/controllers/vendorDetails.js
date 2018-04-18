var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    VendorModel = mongoose.model('vendorDetails');

    module.exports = function (app){
        app.use('/', router);
    };


router.post('/vendorDetails', function(req, res, next) {
console.log('kikikikiki',req.body)
    var vendorModel = new VendorModel(req.body);
    vendorModel.save(function(err, result) {
        if (err){
            console.log('vendorDetailspost failed: ' + err);
        }
        res.send(result);
    });
});


router.get('/allVendorDetails', function(req, res, next) {
    VendorModel.find({},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    }).skip(parseInt(req.params.start)).limit(parseInt(req.params.range))

})


router.delete('/vendorBymongoId/:vendorMongoId',function(req, res, next){
        console.log('vendorMongoId', req.params.vendorMongoId);
            VendorModel.remove({"_id":req.params.vendorMongoId},function(err,result)
            {
            if(err)
            {
            console.log(err);
            }
            else
            {
            res.send(result)
            }

            });
            });


router.get('/vendorByName/:vendorMongoId',function(req,res,next){
        console.log('vendorMongoId', req.params.vendorMongoId);
        VendorModel.findOne({"vendorName":req.params.vendorMongoId},function(err,result){
                      if(err)
                      {
                     console.log(err);
                      }
                      else
                      {
                         console.log(result);
                         res.send(result);

                      }
                      })

});


router.get('/getVendorDetails/:name',function(req,res,next){
        var vendorName = req.params.name;
        console.log('name', req.params.name);
        VendorModel.aggregate([
            { $project: {vendorName:1, commodityName:1, quantity:1, cost:1, dateOfPurchase:1, month:{$month: '$dateOfPurchase'} } },
            {$match: {'vendorName':vendorName} },
            {$group: { _id:"$month", data: { $push: "$$ROOT" } } }
         ], function(err, result){
            if(err){
                console.log(err);
                res.status(500).send(err);
            }
            res.send(result);
         });
});





