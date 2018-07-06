/**
 * Created by sambit on 11/30/16.
 */

var app = angular.module('portfolioApp', []);

app.controller('emailCtrl', function($scope, $http) {
    $scope.email = null;
    $scope.name = null;
    $scope.message = null;
    $scope.sendMessage = function () {
        $http.post('http://35.162.119.105:3199/message/send/sambit', {name: $scope.name, email: $scope.email, message: $scope.message}).then(function(res) {
            console.log(res);
            if(res.data && res.data.status === 'okay' && res.data.message === '@sent') {
                swal('Thanks for sending email!!!');
                $scope.name = '';
                $scope.email = '';
                $scope.message = '';
            }
            else {
                if(res.data && res.data.status === 'fail' && res.data.message === '@wrongData') {
                    swal('Oops!','Please fill up the form properly, please don\'nt leave blank or overflow the boxes. Thank you!!!','error');
                }
                else {
                    swal('Oops!', 'Something went wrong. Please try again later. Thanks you!!!', 'error');
                }
            }
        }, function() {
            //handle error here!!!
        });
    }
    $scope.showBullCowDEscription = function() {
        swal('Bull Cow Game Bot', 'Someone is there to play with you. Start the game and she will guess a three digit number for you. what you have to do, you need to chat with her and tell her your guess and based on your guess she will tell you the number of position and char match and number of char match. and you will again get your chance to choose. That\'s very simple. So give a try!!! \n- Gappi Bot');
    }
})