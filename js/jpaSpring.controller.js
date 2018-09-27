angular.module("jpaSpringApp").controller("jpaSpringController", function($scope, jpaSpringCursoFactory){
    $scope.titulo = "Cursos";

    $scope.cursos = []

    var carregarCursos = function(){
        jpaSpringCursoFactory.listar().then(function(cursos){
        $scope.cursos = cursos;
        });
    }    

    $scope.curso = {};
    
    carregarCursos();
})