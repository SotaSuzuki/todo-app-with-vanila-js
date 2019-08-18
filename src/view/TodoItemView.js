import { element } from '../utils/html-util.js';

export default class TodoItemView {
  createElement(todoItem, { onUpdateTodo, onDeleteTodo }) {
    const { id, completed, title } = todoItem
    const $item = element`<li>
      <input
        id="checkbox-${id}"
        type="checkbox"
        class="checkbox"
        ${completed ? 'checked' : ''}
        />
      <label for="checkbox-${id}">${title}</label>
      <button type="button" class="delete">X</button>
    </li>`

    $item.querySelector('.checkbox').addEventListener('change', () => {
      onUpdateTodo({ id, completed })
    })
    $item.querySelector('.delete').addEventListener('click', () => {
      onDeleteTodo({ id });
    })

    return $item
  }
}