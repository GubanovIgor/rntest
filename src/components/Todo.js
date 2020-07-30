import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Todo = ({todo}) => {
  const {title, completed} = todo;

  return (
    <View style={styles(completed).container}>
      <Text style={styles().text}>{title}</Text>
    </View>
  );
};

const styles = (completed) =>
  StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: completed ? '#c1ff91' : '#ff9191',
      borderRadius: 5,

      paddingHorizontal: 20,
      paddingVertical: 10,
      marginBottom: 10,
    },
    text: {
      fontSize: 18,
    },
  });
