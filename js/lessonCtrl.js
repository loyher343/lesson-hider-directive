angular.module('directivePractice').controller('lessonCtrl',function($scope){
   // $scope.test = 'Pickle Rick'

    $scope.lessons = [
        'Services',
        'Routing',
        'Directives',
        'Review',
        'Firebase',
        'No server project',
        'Node',
        'Express',
        'Mongo'
    ];
    //$scope.test2 = 'Two-way data binding!'

    $scope.announceDay = function(lesson, day){
        console.log(day)
        if(day != undefined){
            alert(lesson + ' is active on ' + day + '.')
        }else{alert(lesson+'is not active on this day')}
    }
})