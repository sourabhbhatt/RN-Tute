import React from 'react';
import {Linking, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        style={styles.drawerItem}
        label="Help"
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerItem: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 5,
    elevation: 5,
  },
});
