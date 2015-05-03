angular.module('myApp').controller('StudentController', ['$scope', 'StudentService', function($scope, StudentService) {
    console.log("Hello World from controller");
    var populateStudents=function(list){
      var students=[];
      
      return students;
    }
var init = function() {
  $scope.newStudent={};
  $scope.studentList=[];
  StudentService.getAllStudents().then(function(students){
    angular.forEach(students,function(elem,index){
        this.push(elem);
        this[index].isEditable=false;
        console.log('value of field'+this[index].isEditable);
      },$scope.studentList);
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
  console.log('In delete'+studentData._id);
  StudentService.deleteStudent(studentData._id).then(function(){
    $scope.studentList.splice($scope.studentList.indexOf(studentData),1);
  });
};

$scope.edit = function(student) {
  student.isEditable=true;
};  

$scope.update = function(studentData) {
  console.log(studentData._id);
  StudentService.updateStudent(studentData).then(function(){
    studentData.isEditable=false;
  });

};

$scope.deselect = function() {
  $scope.student = "";
}

}]);﻿
