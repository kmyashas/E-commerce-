import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import MainScreeen from './app/Screen/MainScreeen';
import Shirts from './app/Screen/Shirts';

const Stack = createStackNavigator()

function App() {
  return(
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name="Main" component={MainScreeen} 
        options={{
          title: 'BrandStore'
        }}
        />


        <Stack.Screen name="Shirts" component={Shirts} />

      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App