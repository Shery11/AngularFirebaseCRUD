var app = angular.module('app',["firebase" ]);

app.controller('jobsCtrl',function($scope,$firebase){
  
 
  var ref = new Firebase("https://emploi-audiovisuel-5093b.firebaseio.com/jobs");
var sync = $firebase(ref);
$scope.jobs = sync.$asArray();
  
});

// app.controller('appCtrl',function($scope,$firebase){
  
  
//    var ref = new Firebase("https://emploi-audiovisuel-5093b.firebaseio.com/jobs");
  
        
  
//   var sync = $firebase(ref);
  
  
//   $scope.DB = sync.$asArray();
//   $scope.app={name:'',description:''}
//   $scope.flag = false;
  
//   $scope.add=function(){
//     $scope.DB.$add($scope.app);
//     $scope.app={name:'',description:''}
  
//   }
  
//    $scope.edit=function(value){
//     $scope.app=value;
//     $scope.flag = true;
//    }
   
//   $scope.save = function(){

//     console.log($scope.app);

//     $scope.DB.$save($scope.app);
//         $scope.edit_form.$setPristine();
//         $scope.app={name:'',description:''};
//         $scope.flag = false;
    
  
//   }
   
//   $scope.delete=function(item){
//     $scope.DB.$remove(item)
//   }
  
 
// })


// app.controller('appCtrl', ['$scope', '$firebaseArray','$firebaseObject',function($scope, $firebaseArray,$firebaseObject){


//   var ref = new Firebase("https://emploi-audiovisuel-5093b.firebaseio.com/jobs");
//   $scope.jobs = $firebaseArray(ref);

//   $scope.flag = false;

//   $scope.add = function(){
//     var name = $scope.app.name;
//     var desc = $scope.app.description;
//     $scope.jobs.$add({
//       name: name,
//       description: desc
//     }).then(function(ref){
//       console.log(ref);
//       $scope.app={name:'',description:''}
    
//     }, function(error){
//       console.log(error);
//     });
//   };


//   $scope.edit = function(id){
//     var ref = firebase.database().ref().child('jobs/' + id);
//     $scope.app = $firebaseObject(ref);
//     $scope.flag = true;
//   };


//   $scope.save = function(id){
//     var ref = firebase.database().ref().child('jobs/' + id);
//     ref.update({
//       name: $scope.app.name,
//       description: $scope.app.description
//     }).then(function(ref){

     
      
//     }, function(error){
//       console.log(error);
//     });


//      $scope.app={name:'',description:''}
//       console.log("Data is edited")
//       $scope.flag = false;
//   };



//   $scope.delete = function(job){
    
//     $scope.jobs.$remove(job);
    
//   };


// }]);


  
