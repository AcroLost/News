import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NewsList from '../NewsList';
import News from '../News';

const Stack = createStackNavigator();
const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="NewsList" component={NewsList} options={{ title: 'Уведомления' }} />
            <Stack.Screen name="News"
                component={News}
                options={{
                    title: 'Уведомления',
                    headerTintColor: '#C7C8CA',
                    headerTitleStyle: { color: 'black' }
                }}

            />
        </Stack.Navigator>
    );
}

export default StackNavigator;