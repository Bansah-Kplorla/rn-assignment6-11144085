import React, { useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import { CartProvider } from './context/CartContext';

const Drawer = createDrawerNavigator();

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');

  return (
     <CartProvider>
        <NavigationContainer
        style={styles.container}
        onStateChange={(state) => {
          const currentRoute = state.routes[state.index];
          setCurrentScreen(currentRoute.name);
        }}
      >
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Cart" component={CartScreen} />
        </Drawer.Navigator>
        <View
        style={[
          styles.Logo,
          currentScreen === 'Cart' ? styles.logoCartStyle : styles.Logo,
        ]}
      >
        <Image source={require('./assets/Logo.png')} />
      </View>
      <View
        style={[
          styles.Search,
          currentScreen === 'Cart' ? styles.searchCartStyle : styles.Search,
        ]}
      >
        <Image source={require('./assets/Search.png')} />
      </View>
        {currentScreen !== 'Cart' && (
          <View style={styles.ShoppingBag}>
            <Image source={require('./assets/shoppingBag.png')} />
          </View>
        )}
      </NavigationContainer>
     </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Logo: {
    position: 'absolute',
    bottom: 880,
    left: 180,
    height: 50
  },
  Search: {
    position: 'absolute',
    bottom: 905,
    left: 360,
  },
  ShoppingBag: {
    position: 'absolute',
    bottom: 910,
    left: 400,
  },
  logoCartStyle: {
    bottom: 890
  },
  searchCartStyle: {
    bottom: 900,
    left: 360,
  }
});