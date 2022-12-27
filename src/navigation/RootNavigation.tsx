import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home,
Splash,
Location } from '@pages';

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown:false
            }}>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigation;