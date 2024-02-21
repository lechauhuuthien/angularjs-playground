// components/todo-list/todo-list.directive.js
angular.module('todoApp')
    .directive('todoList', function() {
        return {
            restrict: 'E',
            templateUrl: 'components/todo-list/todo-list.html',
            controller: 'TodoListController',
            controllerAs: 'todoListCtrl',
            bindToController: true
        };
    });
