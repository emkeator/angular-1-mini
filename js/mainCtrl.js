angular.module('friendsList').controller('mainCtrl', function($scope) {
    $scope.friends = ['Andi P.', 'Andrew A.', 'Adrienne M.', 'Emma A.', 'Jake K.', 'Janise S.', 'Marissa F.', 'Sarah T.', 'Veri D.'];

    $scope.addFriend = function(newFriend){
        $scope.friends.push(newFriend);
        $scope.newFriend = '';
    }

});