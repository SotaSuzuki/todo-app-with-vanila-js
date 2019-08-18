let todoIdx = 0;

export default class TodoItem {
  constructor({ title, completed }) {
    this.id = todoIdx++;
    this.completed = completed || false;
    this.title = title
  }
}