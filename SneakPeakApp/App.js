import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import LokalScreen from './screens/LokalScreen';
import DetailLokalScreen from './screens/DetailLokalScreen';
import InternasionalScreen from './screens/InternasionalScreen';
import DetailInternasionalScreen from './screens/DetailInternasionalScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Navigasi tumpuk untuk Sepatu Lokal (List -> Detail)
function LokalStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListLokal" component={LokalScreen} options={{ title: 'Sepatu Lokal' }} />
      <Stack.Screen name="DetailLokal" component={DetailLokalScreen} options={{ title: 'Detail Sepatu Lokal' }} />
    </Stack.Navigator>
  );
}

// Navigasi tumpuk untuk Sepatu Internasional (List -> Detail)
function InternasionalStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListInternasional" component={InternasionalScreen} options={{ title: 'Sepatu Internasional' }} />
      <Stack.Screen name="DetailInternasional" component={DetailInternasionalScreen} options={{ title: 'Detail Sepatu Internasional' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName = 'footsteps';
            if (route.name === 'Lokal') iconName = 'flag';
            else if (route.name === 'Internasional') iconName = 'globe';
            else if (route.name === 'About') iconName = 'person';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#e63946',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Lokal" component={LokalStack} />
        <Tab.Screen name="Internasional" component={InternasionalStack} />
        <Tab.Screen name="About" component={ProfileScreen} options={{ headerShown: true, title: 'Tentang Aplikasi' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}