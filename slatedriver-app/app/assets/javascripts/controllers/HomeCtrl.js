angular
  .module('slateDriver')
  .controller('HomeCtrl', HomeCtrl)

function HomeCtrl($http, $scope, $rootScope, Auth){
  var controller = this;
  $scope.hello = "Hello World"

  $http.get("/slates/latest.json")
    .then(function (response) {
      $scope.latest_slate = response.data;
    })
}





// angular
//   .module('slateDriver')
//   .controller('HomeCtrl', HomeCtrl)
//
// function HomeCtrl($http, $scope, $rootScope, Auth){
//   var controller = this;
//   // $scope.hello = "Hello World"
// }
//






// console.log("HOMECONTROL PAGE");
// // angular
// //   .module('slateDriver')
// //   .controller('HomeCtrl', function($scope, $rootScope, Auth){
// //     $scope.hello = "Hello World"
// //   })
//
// angular
//   .module('slateDriver')
//   .controller('HomeCtrl', HomeCtrl)
//
//   function HomeCtrl($http, $scope, $rootScope, Auth){
//     var controller = this;
//     console.log(this, "this");
//     $scope.mySlate =
//
//     function getSlates() {
//       console.log("getSlates");
//         $http.get('/slates')
//             .then(function (allSlates) {
//               console.log("allSlates");
//                 console.log(allSlates.data);
//                 // this in here actually refers to $http
//                 // controller.weekData = response.data;
//                 $scope.slateData = allSlates.data;
//             })
//           }
//
//
//   }
