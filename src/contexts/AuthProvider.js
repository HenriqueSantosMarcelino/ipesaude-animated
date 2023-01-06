// O Context consegue manter as informações acessíveis em toda a aplicação, n é necessário 2 páginas como Context e Provider!!
// Podemos juntar em uma página ou uma pasta q acesse as infos do usuário!!
import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState();

    function login() {
        setAuthData(true)
    }

    function logout() {
        setAuthData(false)
    }

    return (
        <AuthContext.Provider value={{ authData, setAuthData, login, logout }} >
            {children}
        </AuthContext.Provider >
    )
}