let todoIdx = 0;

export default class TodoItemModel {
  constructor({ title, completed = false }) {
    this.id = todoIdx++;
    this.completed = completed;
    this.title = title
  }

  isEmpty() {
    return !this.title.length
  }
}