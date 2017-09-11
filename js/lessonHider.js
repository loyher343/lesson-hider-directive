angular.module('directivePractice').directive('lessonHider', function() {

  return {
    templateUrl: '../views/lessonHider.html',
    restrict: 'E',
    scope: {
        lesson: '=',         //telling our directive that we plan on having an attribute named lesson on our <lesson-hider> directive
        dayAlert: '&'
    },
    controller: function($scope, lessonService){
        
        $scope.getSchedule = lessonService.getSchedule()
    },
    link: function( scope, element, attributes ) {
        scope.getSchedule.then(function( response ) {
          scope.schedule = response.data;

          scope.schedule.forEach(function( scheduleDay ) {
              
            if (scheduleDay.lesson === scope.lesson) {
               
              element.css('text-decoration', 'line-through');
              scope.lessonDay = scheduleDay.weekday
            
              return;
            } 
        });
        // console.log(element)
        // console.log(attributes)
        });
    }
  }

})

// scope: {
//     twoWayDataBinding: '=',
//     stringBinding: '@',
//     functionBinding: '&'
//   }