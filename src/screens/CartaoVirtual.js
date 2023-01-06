import { Box, Icon, Center, HStack, Text, Input, View } from 'native-base'
import { Button } from "../components/Button"
import { UserCard } from "../components/UserCard"

import { MaterialCommunityIcons } from "@expo/vector-icons"
import React, { useState } from "react"

export default function CartaoVirtual({ navigation }) {
    var [isPressAprox, setIsPressAprox] = useState(false);
    var [isPressQr, setIsPressQr] = useState(false);

    return (
        <Box >
            <View backgroundColor='orange.500' height={55} alignItems='center' paddingY={2} flexDirection='row' borderBottomRadius={15}>
                <Icon as={MaterialCommunityIcons} name='arrow-left' size={6} color='white' mr={7} ml={5} onPress={() => navigation.goBack()} />
                <Text fontSize={20} color='white'>Cartão Virtual</Text>
            </View>

            <Center>
                <Box
                    borderRadius={10}
                    backgroundColor='white'
                    borderColor='transparent'
                    shadow={2}
                    margin={6}
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    padding={2}
                    width='90%'
                >

                    <HStack
                        justifyContent='space-between'
                        alignItems='center'
                        width='100%'
                        marginBottom={6}
                    >
                        <Button
                            title="Aproximação"
                            backgroundColor='white'
                            textColor="gray.500"
                            color='orange.500'
                            leftIcon={<Icon as={MaterialCommunityIcons} name='contactless-payment' size='md' />}
                            _icon={{ color: 'gray.400' }}
                            _text={{ color: 'gray.400', fontWeight: 'bold' }}
                            borderWidth={2}
                            borderColor='gray.200'
                            shadow={2}
                            width='48%'
                            isPressed={isPressAprox}
                            onPress={() => {
                                navigation.navigate('NFC')
                                setIsPressAprox(!isPressAprox)
                                if (isPressQr == true) {
                                    setIsPressQr(false)
                                }
                            }}
                            _pressed={{
                                _icon: { color: 'orange.500' },
                                _text: { color: 'orange.500' },
                                backgroundColor: 'white',
                                borderColor: 'orange.500'
                            }}
                        />
                        <Button
                            title="QR Code"
                            backgroundColor='white'
                            textColor='gray.500'
                            leftIcon={<Icon as={MaterialCommunityIcons} name='qrcode' size='md' />}
                            _icon={{ color: 'gray.400' }}
                            _text={{ color: 'gray.400', fontWeight: 'bold' }}
                            borderWidth={2}
                            borderColor='gray.200'
                            shadow={2}
                            width='48%'
                            isPressed={isPressQr}
                            onPress={() => {
                                setIsPressQr(!isPressQr)
                                if (isPressAprox == true) {
                                    setIsPressAprox(false)
                                }
                            }}
                            _pressed={{
                                _icon: { color: 'orange.500' },
                                _text: { color: 'orange.500' },
                                backgroundColor: 'white',
                                borderColor: 'orange.500'
                            }}
                        />

                    </HStack>

                    <Box
                        backgroundColor='white'
                        width='95%'
                        alignItems="center"
                    >
                        <UserCard />
                    </Box>

                    <Center
                        marginTop={8}
                        marginBottom={20}
                    >
                        <Text
                            fontFamily='body'
                            fontSize='md'
                            marginBottom={2}
                            color='gray.800'
                        >
                            Informe a senha:
                        </Text>
                        <Input
                            width='45%'
                            borderRadius={16}
                            borderColor='gray.800'
                            borderWidth={2}
                            shadow={2}
                            backgroundColor='gray.100'
                            textAlign='center'
                            focusOutlineColor='gray.200'
                            type="password"
                            keyboardType="numeric"
                        />
                    </Center>
                </Box>
            </Center>

        </Box>

    )
}

