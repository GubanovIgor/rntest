import React, {useEffect} from 'react';
import {observer, inject} from 'mobx-react';
import {TodoList} from '../components/TodoList';

const TodoScreen = ({todoStore}) => {
  useEffect(() => {
    todoStore.getTodos();
  }, [todoStore]);

  const todoDeleteHandler = (todoId) => {
    todoStore.deleteTodo(todoId);
  };

  return (
    <TodoList todos={todoStore.todos} todoDeleteHandler={todoDeleteHandler} />
  );
};

export default inject(({todoStore}) => ({todoStore}))(observer(TodoScreen));
