webapp.factory("orderService", function ($http) {

       var postOrderSettings = function (data) {
           return $http.post('/orderSetting', data);
       }
//       var deleteReport = function (reportId) {
//           return $http.delete('/reportBymongoId/' + reportId);
//       }
       var getAllOrderSettings = function () {
           return $http.get('/allOrderSetting');
       }
//       var getSingleOrder = function (orderId) {
//           return $http.get('/customerBymongoId/'+ orderId);
//       }
//       var updateReport = function (editdata) {
//           return $http.post('/editReportBymongoId', editdata);
//       }

return {
        postOrderSettings: postOrderSettings,
//        deleteReport: deleteReport,
        getAllOrderSettings: getAllOrderSettings
//        getSingleOrder: getSingleOrder
//        getSingleReport: getSingleReport,
//        updateReport: updateReport

        }


})