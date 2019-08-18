import EventEmitter from './EventEmitter.js'

export default class TodoListModel extends EventEmitter {
  constructor() {
    super();
    this.items = [];
  }

  set onAdded(listener) {
    this.addEventListener('added', listener);
  }

  addItem(item) {
    this.items.push(item);
    this.emit('added');
  }

  getAllItems() {
    return this.items;
  }
}