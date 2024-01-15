import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SplashScreen from './SplashScreen';
import Login from './components/login/login';
import HomeScreen from './components/homescreen/homescreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} /> */}
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


