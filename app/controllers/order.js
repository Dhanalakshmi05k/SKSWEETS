var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    OrderModel = mongoose.model('orders');

    module.exports = function (app){
        app.use('/', router);
    };


router.post('/orderSetting', function(req, res, next) {
    var orderModel = new OrderModel(req.body);
    orderModel.save(function(err, result) {
        if (err){
            console.log('orderSetting failed: ' + err);
        }
        res.send(result);
    });
});

router.get('/allOrderSetting', function(req, res, next) {
OrderModel.find({},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    }).skip(parseInt(req.params.start)).limit(parseInt(req.params.range))

})

router.get('/customerBymongoId/:customerMongoId',function(req,res,next){
console.log('customerMongoId', req.params.customerMongoId);
OrderModel.find({"customerId":req.params.customerMongoId},function(err,result){
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
