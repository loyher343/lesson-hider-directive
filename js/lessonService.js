angular.module('directivePractice').service('lessonService',function($http){
    var url = '../schedule.json';
    this.getSchedule = function(){
        var promise = $http({
            method: 'GET',
            url : url
        })
        return promise;
    }

})