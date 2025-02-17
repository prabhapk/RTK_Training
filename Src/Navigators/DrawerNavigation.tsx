import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import CustomSidebarMenu from './CustomSidebarMenu';
import detailsPage from '../Screens/detailsPage';

const Drawer = createDrawerNavigator();

export default class DrawerNavigation extends Component {
  render() {
    return (
  
    
   
  <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
          <Drawer.Screen
        name="detailsPage"        
        component={detailsPage}
      />
       
      </Drawer.Navigator>
     
   
    )
  }
}
