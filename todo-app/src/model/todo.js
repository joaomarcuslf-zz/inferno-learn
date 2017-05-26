import { observable, computed } from "mobx";

// ignore the two lines below, they just creates unique IDs for the todo
var _nextId = 0;
function nextId() {
  _nextId++;
  return _nextId;
}

// this is our domain model class
export default class Todo {
  id = nextId();
  @observable text = "";
  @observable done = false;

  @computed get isValid() {
    return this.text !== "";
  }

  serialize() {
    return {
      id: this.id,
      text: this.text,
      done: this.done
    };
  }
  static deserialize(json) {
    const todo = new Todo();
    todo.id = json["id"] || nextId();
    todo.text = json["text"] || "";
    todo.done = json["done"] || false;
    return todo;
  }
}
