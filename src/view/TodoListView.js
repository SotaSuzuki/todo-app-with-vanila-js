import { element } from '../utils/html-util.js';
import TodoItemView from './TodoItemView.js'

export default class TodoListView {
  createElement(todoItems, { onUpdateTodo, onDeleteTodo }) {
    const $todoList = element`<ul />`;
    const todoItemView = new TodoItemView()
    todoItems.forEach(item => {
      const $item = todoItemView.createElement(item, {
        onUpdateTodo,
        onDeleteTodo,
      })
      $todoList.appendChild($item);
    })
    return $todoList
  }
}