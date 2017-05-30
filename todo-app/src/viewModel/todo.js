import { observable, action } from "mobx";
import Todo from "../model/todo";

export default class TodoViewModel {
  @observable todos = [];

  constructor() {
    this.load();
  }

  @action add() {
    const newTodo = new Todo();
    this.todos.push(newTodo);
    return newTodo;
  }

  @action remove(todo) {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

  @action edit(todo) {
    const index = this.todos.indexOf(todo);

    this.todos.forEach(
      (elm, i) => (i === index ? elm.set("editing", !todo.editing) : elm)
    );
  }

  @action load() {
    if (window.localStorage) {
      const json = JSON.parse(window.localStorage.getItem("todos") || "[]");

      this.todos = json.map(todo => Todo.deserialize(todo));
    }
  }

  @action save() {
    if (this.todos.filter(todo => todo.isValid === false).length > 0) {
      alert("Unable to save: There are invalid Todos.");
    }

    if (window.localStorage) {
      window.localStorage.setItem(
        "todos",
        JSON.stringify(this.todos.map(todo => todo.serialize()))
      );
    }
  }
}
