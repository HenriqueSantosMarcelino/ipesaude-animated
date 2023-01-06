// Essa página cria apenas um usuário no FireBase usando email e senha, na prática vamos consumir um BD, precisamos enviar tbm nome e outras infos da pessoa!
import React, { useState } from 'react'
import { View, HStack, Stack, Heading, Text, Input, Button, Center, Image } from 'native-base'
import { AlertMessage } from '../components/AlertMessage'
import { LinearGradient } from 'expo-linear-gradient';

import { app } from '../../firebase'
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Registro({ navigation }) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [matricula, setMatricula] = useState()
    const [loading, setLoading] = useState(false)

    const [{ alerttype, visible, show, message }, setAlertMessage] = useState({
        alerttype: '',
        visible: 'none',
        show: false,
        message: ''
    })

    const handleSignUp = async () => {
        setLoading(true)
        const db = getFirestore(app)
        const auth = getAuth()

        //aqui deveremos consultar se a matricula existe no banco de dados

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                if (!matricula) {
                    setAlertMessage({
                        alerttype: 'error',
                        visible: 'flex',
                        show: true,
                        message: 'Informe o nº• de sua matrícula'
                    })
                    setLoading(false)
                    return false
                }

                const uid = userCredential.user.uid

                setDoc(doc(db, 'users', uid), {
                    email: email,
                    matricula: matricula
                })
                setAlertMessage({
                    alerttype: 'success',
                    visible: 'flex',
                    show: true,
                    message: 'Cadastro realizado com sucesso'
                })
                setLoading(false)
                navigation.navigate('Login')
            }).catch(function (error) {
                const errorCode = error.code
                const errormessage = ''
                switch (errorCode) {
                    case 'auth/missing-email':
                        errormessage = 'Digite seu email, por favor.'
                        break
                    case 'auth/invalid-email':
                        errormessage = 'E-mail inválido.'
                        break
                    case 'auth/email-already-in-use':
                        errormessage = 'Este e-mail já está sendo utilizado em outra conta.'
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
                    case 'auth/admin-restricted-operation':
                        errormessage = 'Ocorreu um erro inesperado. Tente novamente mais tarde.'
                        break
                }
                setAlertMessage({
                    alerttype: 'error',
                    visible: 'flex',
                    show: true,
                    message: errormessage
                })
            })
    }

    return (
        <View style={{ flex: 1 }}>
            <HStack space={0} justifyContent="center">
                <Center h="1" w="33%" bg="green.600" m="0" shadow={3} />
                <Center h="1" w="36%" bg="orange.500" shadow={3} />
                <Center h="1" w="33%" bg="green.500" shadow={3} />
            </HStack>
            <LinearGradient colors={['#fff', '#f1ffe8']} locations={[0.5, 1]} >
                <Stack space={3} w="90%" h="100%" mx="auto" alignItems="center">
                    <Image
                        source={require('../assets/ipe_logo.png')}
                        style={{ width: 300, height: 250 }}
                        alt="Alternate Text" />
                    <Heading color="orange.500" size="lg">Cadastre-se</Heading>
                    <Text color="green.600">Por favor, preencha o formulário abaixo:</Text>
                    <Input
                        bg="white"
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
                    <Input
                        bg="white"
                        variant="outline"
                        placeholder="Digite o nº de sua matrícula"
                        value={matricula}
                        onChangeText={text => setMatricula(text)}
                    />

                    <AlertMessage alerttype={alerttype} visible={visible} show={show} message={message} />

                    <Button
                        isLoading={loading}
                        isLoadingText='Enviando...'
                        borderRadius="20"
                        borderWidth="2"
                        borderColor="white"
                        px="10"
                        bg="green.600"
                        size="lg"
                        onPress={() => handleSignUp()}
                    >
                        Cadastrar
                    </Button>
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