import {observable, action} from 'mobx';

export default class TodoStore {
  @observable
  todos = [];

  @action
  async getTodos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const todos = await res.json();
    this.todos = todos;
  }

  @action
  async deleteTodo(todoId) {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const newTodos = await JSON.parse(JSON.stringify(this.todos));
    this.todos = newTodos.filter((el) => el.id !== todoId);
  }
}
