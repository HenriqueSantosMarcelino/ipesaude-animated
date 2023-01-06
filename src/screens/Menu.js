import { View } from 'native-base'
import React, { useState, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from '../screens/Perfil'
import Home from '../screens/Home';
import Notificacoes from './Notificacoes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import notifications from '../JSON/notifications.json'

const Tab = createBottomTabNavigator();

export default function Menu({ navigation }) {
    const [numberNotifications, setNumberNotifications] = useState(0);

    useEffect(() => {
        const n = notifications.length
        setNumberNotifications(n)
    }, [numberNotifications])

    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Perfil') {
                            iconName = focused ? 'person-circle' : 'person-circle-outline';
                        } else if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Notificações') {
                            iconName = focused ? 'notifications' : 'notifications-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#7aa62c',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen
                    name="Perfil"
                    component={Perfil}
                    options={{
                        title: 'Perfil',
                        headerShown: false
                    }}
                />
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Home',
                        headerShown: false
                    }}
                />
                <Tab.Screen
                    name="Notificações"
                    component={Notificacoes}
                    options={{
                        title: 'Notificações',
                        headerShown: false,
                        tabBarBadge: numberNotifications
                    }}
                />
            </Tab.Navigator>
        </View>
    )
}