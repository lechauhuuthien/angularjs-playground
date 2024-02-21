// components/todo-list/todo-list.controller.js
angular.module("todoApp").controller("TodoListController", function () {
  var todoListCtrl = this;
  todoListCtrl.todos = [];

  todoListCtrl.addTodo = function (event) {
    if (event.which === 13 && todoListCtrl.newTodo) {
      todoListCtrl.todos.push({ text: todoListCtrl.newTodo });
      todoListCtrl.newTodo = "";
    }
  };

  todoListCtrl.removeTodo = function (todo) {
    var index = todoListCtrl.todos.indexOf(todo);
    if (index !== -1) {
      todoListCtrl.todos.splice(index, 1);
    }
  };
});
