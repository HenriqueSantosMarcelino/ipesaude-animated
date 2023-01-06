// Nesta pág de login é importante adicionar a conecção com o Context, a pessoa entra no app e então suas infos são buscadas por API no Banco de Dados!!
import { View, HStack, Stack, Heading, Text, Input, Button, Center, Image, Link } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AlertMessage } from '../components/AlertMessage';
import Menu from '../screens/Menu'

export function Login({ navigation }) {
    const { setAuthData } = useContext(AuthContext);

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)

    const [{ alerttype, visible, show, message }, setAlertMessage] = useState({
        alerttype: '',
        visible: 'none',
        show: false,
        message: ''
    })

    //cleanup function
    useEffect(() => {
        return () => { }
    }, [])

    const handleLogin = () => {
        setLoading(true)
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                setAuthData(true)
                setLoading(false)
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code
                const errormessage = ''
                console.log(errorCode)
                switch (errorCode) {
                    case 'auth/missing-email':
                        errormessage = 'Digite seu email, por favor.'
                        break
                    case 'auth/invalid-email':
                        errormessage = 'E-mail inválido.'
                        break
                    case 'auth/internal-error':
                        errormessage = 'Digite sua senha, por favor.'
                        break
                    case 'auth/wrong-password':
                        errormessage = 'Senha inválida.'
                        break
                    case 'auth/user-not-found':
                        errormessage = 'Usuário não encontrado.'
                        break
                }
                setAlertMessage({
                    show: true,
                    visible: 'flex',
                    alerttype: 'error',
                    message: errormessage
                })
            });
    }

    return (
        <View style={{ flex: 1 }}>
            <HStack space={0} justifyContent="center">
                <Center h="1" w="33%" bg="green.600" m="0" shadow={3} />
                <Center h="1" w="36%" bg="orange.500" shadow={3} />
                <Center h="1" w="33%" bg="green.500" shadow={3} />
            </HStack>
            <LinearGradient
                colors={['#fff', '#f1ffe8']} locations={[0.5, 1]} >
                <Stack space={4} w="90%" h="100%" mx="auto" alignItems="center" justifyContent="center" >
                    <Image
                        source={require('../assets/ipe_logo.png')}
                        style={{ width: 300, height: 300 }}
                        alt="Alternate Text" />

                    <Heading color="#ff9626" size="lg">Seja bem vindo!</Heading>
                    <Text fontSize={18} color="#005B36">Acesse sua conta de forma segura:</Text>

                    <Text fontSize={18} fontWeight='bold' color="#005B36">entrar com:</Text>

                    <View w='60%' rounded={70} px={8} bg="white" shadow={3} my={10}>
                        <Button _pressed={{ bg: 'transparent' }} onPress={() => { setAuthData(true) }} bg={'transparent'}>
                            <Image
                                source={require('../assets/gov-br-logo.png')}
                                style={{ height: 100 }}
                                resizeMode='contain'
                                alt="Alternate Text" />
                        </Button>
                    </View>

                    <Link _text={{
                        fontSize: "xl",
                        color: "#005B36"
                    }}>Acessar de outra forma</Link>
                    {/* <Input
                        bg="#fff"
                        variant="outline"
                        placeholder="Digite seu email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                    <Input
                        type='password'
                        bg="white"
                        variant="outline"
                        placeholder="Digite sua senha"
                        onChangeText={text => setPassword(text)}
                    />
                    <HStack w="100%" mt={-3}>
                        <Link alignSelf="flex-start" _text={{ color: "green.600" }}>
                            Esqueceu sua senha?
                        </Link>
                        <Link onPress={() => navigation.navigate('Registro')} alignSelf="flex-end" ml="auto" _text={{ color: "green.600" }}>
                            Cadastrar-se.
                        </Link>
                    </HStack>
                    <AlertMessage alerttype={alerttype} visible={visible} show={show} message={message} /> 
                    <Button isLoading={loading} isLoadingText='Enviando...' borderRadius="20" borderWidth="2" borderColor="white" px="10" bg="green.600" size="lg" onPress={() => handleLogin()}>Entrar</Button>*/}

                </Stack>
            </LinearGradient>
            <HStack space={0} style={{ position: 'absolute', bottom: 0 }} justifyContent="center">
                <Center h="1" w="33%" bg="green.600" />
                <Center h="1" w="33%" bg="orange.500" />
                <Center h="1" w="33%" bg="green.500" />
            </HStack>
        </View>
    )
}