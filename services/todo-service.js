// services/todo-service.js
angular.module("todoApp").service("todoService", function () {
  var todos = [];

  this.getTodos = function () {
    return todos;
  };

  this.addTodo = function (todoText) {
    todos.push({ text: todoText });
  };

  this.removeTodo = function (todo) {
    var index = todos.indexOf(todo);
    if (index !== -1) {
      todos.splice(index, 1);
    }
  };
});
