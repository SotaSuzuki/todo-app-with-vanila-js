import { element } from './view/html-util.js';
import TodoItem from './view/TodoItemModel.js';
import TodoList from './view/TodoListModel.js';

console.log('App.js: loaded')

export class App {
  constructor() {
    console.log('App initialized')
  }

  mount() {
    console.log('App mounted')
    const $form = document.querySelector('#js-form');
    const $textInput = document.querySelector('#js-form-input');
    const $todoList = document.querySelector('#js-todo-list');
    const $todosCount = document.querySelector('#js-todo-count');

    const todoList = new TodoList();
    todoList.onAdded = () => {
      console.log('added');
    }

    $form.addEventListener('submit', evt => {
      evt.preventDefault();
      const todoItem = new TodoItem({ title: $textInput.value })
      todoList.addItem(todoItem);
      $todoList.appendChild(element`<li>${todoItem.title}</li>`)
      $todosCount.textContent = `Todo アイテム数: ${todoList.items.length}`

      console.log(todoList);
      $textInput.value = ''
    })
  }
}