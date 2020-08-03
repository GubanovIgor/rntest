import React, {useEffect} from 'react';
import {observer, inject} from 'mobx-react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {TodoList} from '../components/TodoList';

const TodoModal = ({todoStore}) => {
  useEffect(() => {
    todoStore.getTodos();
  }, [todoStore]);

  const todoDeleteHandler = (todoId) => {
    todoStore.deleteTodo(todoId);
  };

  if (!todoStore.todos.length) {
    return (
      <View style={styles.spinnerWrapper}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <TodoList todos={todoStore.todos} todoDeleteHandler={todoDeleteHandler} />
  );
};

const styles = StyleSheet.create({
  spinnerWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default inject(({todoStore}) => ({todoStore}))(observer(TodoModal));
