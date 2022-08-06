import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
//import all screen
import Home from './src/app/home/home';
import Product from './src/app/product/product';
import Details from './src/app/detail/detail';
const App = createStackNavigator();
// const Drawer = createDrawerNavigator();

export const RootRouter = () => {
  return (
    <App.Navigator
      initialRouteName="Home"
      // initialRouteName="ServicesPage"
      screenOptions={{
        headerShown: false,
      }}>
      <App.Screen name="Home" component={Home} options={{headerShown: false}} />
      <App.Screen
        name="Product"
        component={Product}
        options={{headerShown: false}}
      />
      <App.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
    </App.Navigator>
  );
};
