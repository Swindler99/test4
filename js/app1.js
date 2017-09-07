angular.module("direcModule", [])
	.directive("myDirec1", function() {
		return {
			restrict: "AE",
			template: "<div>Hello div1</div> <span ng-transclude></span>,{{name}}",
			//templateUrl:"temp.html",
			replace: true,
			transclude: true,
			/*controller: function($scope) {
//				$scope.name = "Tom";
			},
			link: function(scope, element, attrs) {
				console.log(element);
				console.log(attrs.name);
				scope.name=attrs.name;
			}*/
		};
	});