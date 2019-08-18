import EventEmitter from '../utils/EventEmitter.js'

export default class TodoListModel extends EventEmitter {
  constructor(items = []) {
    super();
    this.items = items;
  }

  set onChange(listener) {
    this.addEventListener('change', listener);
  }

  set offChange(listener) {
    this.removeEventListener('change', listener);
  }

  emitChange() {
    this.emit('change');
  }

  addTodo(todo) {
    if (todo.isEmpty()) {
      return;
    }
    this.items.push(todo);
    this.emitChange();
  }

  getAllItems() {
    return this.items;
  }

  updateTodo({ id, completed }) {
    const todoItem = this.items.find(todo => todo.id === id);
    if (!todoItem) {
      return;
    }
    todoItem.completed = completed;
    this.emitChange();
  }

  deleteTodo({ id }) {
    this.items = this.items.filter(item => id !== item.id)
    this.emitChange();
  }

  get totalCount() {
    return this.items.length
  }
}