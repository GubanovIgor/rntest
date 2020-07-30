import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import {Todo} from './Todo';

export const TodoList = ({todos}) => {
  return (
    <FlatList
      contentContainerStyle={styles.wrapper}
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => <Todo todo={item} />}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
