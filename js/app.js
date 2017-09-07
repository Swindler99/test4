var m = angular.module("module1", []);
m.controller("ctrl1", ["$scope", function(a) {
	a.age = 20;
	a.address = "成都";
}]); //创建控制器
m.controller("ctrl2", ["$scope", function(a) {
	var user={
		name:"Jack",
		age:24
	};
	a.user=user;
}]); 
m.controller("ctrl3", ["$scope", function(a) {
	a.num1=0;
	a.num2=0;
	a.isChecked=true;
	//a.result=a.num1+a.num2;
//	a.sum=function(){
//		this.result=parseInt(this.num1)+parseInt(this.num2);
//	}
}]); 

m.controller("ctrl4", ["$scope","$http", function(a,http) {
	http.get("http://172.13.16.2:8900/school/course/list").then(function(r){
		a.courses=r.data.data;
	});
}]); 