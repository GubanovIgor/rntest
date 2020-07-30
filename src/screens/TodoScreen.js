import React, {useEffect} from 'react';
import {observer, inject} from 'mobx-react';
import {TodoList} from '../components/TodoList';

const TodoScreen = ({todoStore}) => {
  useEffect(() => {
    todoStore.getTodos();
  }, [todoStore]);

  return <TodoList todos={todoStore.todos} />;
};

export default inject(({todoStore}) => ({todoStore}))(observer(TodoScreen));
