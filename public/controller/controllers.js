angular.module('myApp').controller('StudentController', ['$scope', 'StudentService', function($scope, StudentService) {
    console.log("Hello World from controller");
var init = function() {
  $scope.newStudent={};
  $scope.studentList=[];
  StudentService.getAllStudents().then(function(students){
    $scope.studentList=students;
  });
};

init();

$scope.addStudent = function() {
  console.log($scope.newStudent);
  StudentService.addStudent($scope.newStudent).then(function(response){
    var newStudentRef=angular.copy($scope.newStudent);
    $scope.studentList.push(newStudentRef);
    $scope.newStudent={};
  });
};

$scope.remove = function(studentData) {
  console.log('In delete'+studentData.id);
  StudentService.deleteStudent(studentData.id).then(function(){
    $scope.studentList.splice($scope.studentList.indexOf(studentData),1);
  });
};

$scope.edit = function(id) {
  console.log(id);
  $http.get('/studentlist/' + id).success(function(response) {
    $scope.student = response;
  });
};  

$scope.update = function() {
  console.log($scope.student._id);
  $http.put('/studentlist/' + $scope.student._id, $scope.student).success(function(response) {
    refresh();
  })
};

$scope.deselect = function() {
  $scope.student = "";
}

}]);﻿
