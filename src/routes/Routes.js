// As rotas são os caminhos de navegação, aonde nós acessamos as telas e abrimos no App, temos q abrir o login primeiro e dps home e outros!
// Nesse momento para não precisar ficar fazendo o login toda h, estamos direcionados para a Home page, essa pasta será atualizada antes da entrega final!
import React, { useContext } from 'react'
import AuthStack from './AuthStack';
import { AuthContext } from '../contexts/AuthContext';
import AppStack from './AppStack';

export default function Routes() {
    const { authData } = useContext(AuthContext);
    return (
        authData ? <AppStack /> : <AuthStack />
    )
}