import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';

export const Todo = ({todo, todoDeleteHandler}) => {
  const {title, completed, id} = todo;

  const LeftAction = () => {
    return (
      <View style={styles().leftAction}>
        <Text style={styles().text}>Delete</Text>
      </View>
    );
  };

  return (
    <Swipeable
      renderLeftActions={LeftAction}
      onSwipeableLeftOpen={() => todoDeleteHandler(id)}>
      <View style={styles(completed).container}>
        <Text style={styles().text}>{title}</Text>
      </View>
    </Swipeable>
  );
};

const styles = (completed) =>
  StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: completed ? '#c1ff91' : '#ffe391',
      borderRadius: 5,

      paddingHorizontal: 20,
      paddingVertical: 10,
      marginBottom: 10,
    },
    text: {
      fontSize: 18,
    },
    leftAction: {
      justifyContent: 'center',

      backgroundColor: '#ff9191',
      borderRadius: 5,

      paddingHorizontal: 20,
      paddingVertical: 10,
      marginBottom: 10,
    },
  });
