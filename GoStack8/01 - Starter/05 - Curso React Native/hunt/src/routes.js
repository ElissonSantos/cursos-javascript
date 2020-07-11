import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Main from './pages/main';

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#ec3237' },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
}
