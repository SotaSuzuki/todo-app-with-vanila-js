import { render } from './utils/html-util.js';
import TodoItemModel from './models/TodoItemModel.js';
import TodoListModel from './models/TodoListModel.js';
import TodoListView from './view/TodoListView.js';

export class App {
  constructor() {
    this.todoListView = new TodoListView();
    this.todoListModel = new TodoListModel();
    this.$textInput = document.querySelector('#js-form-input');
    this.$form = document.querySelector('#js-form');
    this.$todoContainer = document.querySelector('#js-todo-list');
    this.$todosCount = document.querySelector('#js-todo-count');
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleAdd(title) {
    const todoItem = new TodoItemModel({ title })
    this.todoListModel.addTodo(todoItem);
  }

  handleUpdate({ id, completed }) {
    this.todoListModel.updateTodo({ id, completed: !completed })
  }

  handleDelete({ id }) {
    this.todoListModel.deleteTodo({ id });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const title = this.$textInput.value
    this.handleAdd(title)
    this.$textInput.value = ''
  }

  handleChange() {
    const todoItems = this.todoListModel.getAllItems();
    const $todoList = this.todoListView.createElement(todoItems, {
      onUpdateTodo: ({ id, completed }) => this.handleUpdate({ id, completed }),
      onDeleteTodo: ({ id }) => this.handleDelete({ id }),
    })
    render($todoList, this.$todoContainer);
    this.$todosCount.textContent = `Todo アイテム数: ${this.todoListModel.totalCount}`
  }

  mount() {
    this.todoListModel.onChange = this.handleChange
    this.$form.addEventListener('submit', this.handleSubmit)
  }

  unmount() {
    $form.removeEventListener('submit', this.handleSubmit)
    this.todoListModel.offChange = handleChange
  }
}