import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {observer, inject} from 'mobx-react';

const TodoScreen = ({todoStore}) => {
  return (
    <View style={styles.container}>
      <Text>Todo Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default inject(({todoStore}) => ({todoStore}))(observer(TodoScreen));
