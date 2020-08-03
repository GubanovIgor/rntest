import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {HomeNavigator} from './HomeNavigator';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="TodoModal"
        onPress={() => props.navigation.navigate('TodoModal')}
      />
    </DrawerContentScrollView>
  );
}

export const DrawerNavigator = ({navigation}) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} navigation={navigation} />
      )}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeNavigator}
        options={{title: 'Home'}}
      />
    </Drawer.Navigator>
  );
};
