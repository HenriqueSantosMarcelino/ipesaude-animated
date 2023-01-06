// As rotas são os caminhos de navegação, aonde nós acessamos as telas e abrimos no App, temos q abrir o login primeiro e dps home e outros!
// Nesse momento para não precisar ficar fazendo o login toda h, estamos direcionados para a Home page, essa pasta será atualizada antes da entrega final!
import React from 'react'
import { Login } from '../screens/Login'
import Menu from '../screens/Menu'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Registro from '../screens/Registro'
import {THEME} from '../../styles/theme'

const Stack = createNativeStackNavigator()

export default function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registro" component={Registro}
                options={{
                    title: 'Cadastre-se',
                    headerShown: true,
                    headerTintColor: THEME.colors.white,
                    headerStyle: { backgroundColor: THEME.colors.orange[500] }
                }} />
        </Stack.Navigator>
    )
}