import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import Menuitems from './components/MenuItems';
import Feedback from './components/Feedback';
import LoginScreen from './components/LoginScreen';
import SubscribeScreen from './components/SubscribeScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader />
          <Drawer.Navigator
            useLegacyImplementation
            initialRouteName="Welcome"
            screenOptions={{ drawerPosition: 'Right' }}>
            <Drawer.Screen name="Welcome" component={WelcomeScreen} />
            <Drawer.Screen name="Login" component={LoginScreen} />
            <Drawer.Screen name="Menu" component={Menuitems} />
            <Drawer.Screen name="Subscribe" component={SubscribeScreen} />
          </Drawer.Navigator>
        </View>
        <View style={styles.footer}>
          <LittleLemonFooter />
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
  footer: {
    borderStartColor: '#F4CE14',
  },
});
