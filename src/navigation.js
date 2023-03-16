import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductsScreen from './screens/ProductsScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ShoppingCart from './screens/ShoppingCart';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Products' component={ProductsScreen}/>
        <Stack.Screen name='Product Details' component={ProductDetailsScreen}/>
        <Stack.Screen name='Cart' component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}