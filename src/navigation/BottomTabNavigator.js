import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import StackNavigator from './StackNavigator';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#000000',
                labelStyle: { fontWeight: 'bold', paddingBottom: 2 },
                activeTabStyle: {
                    fontWeight: 'bold'
                },
            }}
        >
            <Tab.Screen name="NewsList"
                component={StackNavigator}
                options={{

                    tabBarLabel: 'Главная',
                    tabBarIcon: ({ focused }) => (
                        focused
                            ? <Image source={require('../image/Glyph.png')} />
                            : <Image source={require('../image/GlyphUn.png')} />
                    )
                }}
            />
            <Tab.Screen name="NewsLis"
                component={StackNavigator}
                options={{
                    tabBarLabel: 'Уведомления',
                    tabBarIcon: ({ focused }) => (
                        focused
                            ? <Image source={require('../image/newsAct.png')} />
                            : <Image source={require('../image/news.png')} />
                    )
                }} />
            <Tab.Screen name="NewsLi"
                component={StackNavigator}
                options={{
                    tabBarLabel: 'Профиль',
                    tabBarIcon: () => (
                        <Image source={require('../image/user.png')} />
                    )
                }} />


        </Tab.Navigator>
    );
};

export default BottomTabNavigator;