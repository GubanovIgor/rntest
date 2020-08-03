import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerNavigator} from './DrawerNavigator';
import TodoModal from '../screens/TodoModal';

const RootStack = createStackNavigator();

export const RootStackNavigator = () => {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <RootStack.Screen name="TodoModal" component={TodoModal} />
    </RootStack.Navigator>
  );
};
