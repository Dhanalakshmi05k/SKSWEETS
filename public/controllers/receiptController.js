webapp.controller("receiptCtrl",function($scope,receiptServices,fileUpload){
$scope.getAllReceiptDetails = function ()
             {
                      receiptServices.getAllReceiptDetails().then(function (res)
                      {
                         $scope.receiptList = res.data;
                      });
             };

//$scope.saveDetails=function(slogan){
// $scope.SettingDetail={};
//         $scope.SettingDetail.SettingSlogan =slogan ;
//         $scope.SettingDetail.DocUpload=receiptServices.getSettingLogoImage();
//         console.log($scope.SettingDetail);
//        receiptServices.postAllSettingDetails($scope.SettingDetail)
//            .then(function (resultDetails) {
//                $scope.getSettingDetail();
//                console.log('setting  detail saved successfully');
//             },
//             function error(err) {
//                console.log('setting save failed:', err);
//             });
//    };

$scope.deleteReceipt = function(receiptId)
           {
               receiptServices.deleteReceipt(receiptId)
                   .then(function(res)
                   {
                    $scope.getAllReceiptDetails();
                      console.log('wqeqweqweqw',res.data);
                       console.log('receipt deleted.');
                   },
                   function error(err)
                   {
                      console.log('receipt delete failed:', err);
                   });
           }

$scope.receiptDetails = {};
              $scope.saveReceiptDetails=function()
                   {
                       $scope.receiptDetails.docUpload=receiptServices.getSettingLogoImage();
                       receiptServices.postReceiptdetails($scope.receiptDetails)
                           .then(function (res)
                           {
                               $scope.getAllReceiptDetails();
                               console.log('receipt detail saved successfully');
                           },
                            function error(err)
                           {
                               alert("ENTER CORRECT DETAILS")
                               console.log('receipt save failed:', err);
                           });
                   };

$scope.uploadfile=function(fliedata)
{

//console.log(fliedata);
$scope.imagedata=fliedata.base64;
receiptServices.setSettingLogoImage($scope.imagedata);

//console.log($scope.imagedata);
}

$scope.getSingleReceipt = function (receiptId) {
                  receiptServices.getSingleReceipt(receiptId).then(function (res) {
                      $scope.receipt = res.data;
                      console.log('asdasdsad',$scope.receipt);
                  });
             };

$scope.updateReceipt = function(){
                      receiptServices.updateReceiptDetails($scope.receipt)
                          .then(function(res){
                      $scope.getAllReceiptDetails();
                              console.log('receipt updated.');
                          },
                          function error(err) {
                             console.log('receipt update failed:', err);
                          });
                  }


$scope.getAllReceiptDetails();
});