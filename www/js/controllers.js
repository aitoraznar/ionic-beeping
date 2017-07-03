angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope, $timeout) {
  $scope.isbeepingListening = false;

  var beepSample = {"type":"url","data":"https://aitoraznar.com","url":"https://aitoraznar.com","title":"Aitor's Cave | La cueva de Aitor. DÃ³nde mis locuras y opiniones se plasman en palabras.","brand":"Aitor's Cave","imgSrc":"https://aitoraznar.com/wp-content/uploads/2017/04/shutterstock_158189462-phipatbig_voice-voz-788x394.jpg","ogType":"website","_id":"wGvA4bvBh9JdE6zH2","avatar":"https://api.beeping.io/cdn/storage/Images/yaxKxWytwakToWuAe/original/yaxKxWytwakToWuAe.jpg","init":0,"final":3600000,"createdAt":"2017-06-15T18:36:22.591Z","updatedAt":"2017-06-15T18:36:22.591Z"};
  $scope.beepings = [];



  $scope.startListening = function() {
    var success = function(beep) {

      $timeout(function () {
        //alert('OK:' + JSON.stringify(message));
        if (beep === 'OK') {
          $scope.isbeepingListening = true;
        } else {
          console.log('BEEPING', beep);
          $scope.beepings.push(beep);
        }
      });
    };

    var failure = function(error) {
      $timeout(function () {
        $scope.isbeepingListening = false;
        alert('ERROR:' + JSON.stringify(error));
      });
    };


    //$scope.isbeepingListening = !$scope.isbeepingListening;


    //console.log('----->', beeping.startBeepingListen);
    if (cordova && beeping) {
      if (!$scope.isbeepingListening) {
        beeping.startBeepingListen(success, failure);
      } else {
        beeping.stopBeepingListen(function () {
          $timeout(function () {
            console.log('BEEPING - STOP');
            $scope.isbeepingListening = false;
          });
        }, failure);
      }
    }

  };



});
