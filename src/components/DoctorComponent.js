import React from "react";
import { Box, Text, Icon, Flex, } from 'native-base'
import { Entypo, FontAwesome, EvilIcons } from "@expo/vector-icons";

export function DoctorComponent(props) {
    const title = props.title;
    const type = props.type;
    const phone = props.phone;
    const adress = props.adress
    
    //Amanda Pinto Sobrosa Lopes
    //Pediatra
    //9 9121-6108
    //Rua Gomes Jardim, 201 sala 708 - Santana, Porto Alegre - RS
    return (
        <Box backgroundColor='white' width='90%' padding={5} borderRadius={10} shadow={3} mb='5'>
            <Flex direction="column">
                <Box width='100%' alignItems='center'>
                    <Flex direction="row">
                        <Text bold fontSize={19}>{title}</Text>
                        <Icon as={Entypo} name="star" color='yellow.400' size={30} />
                    </Flex>
                </Box>

                <Box alignItems='center'>
                    <Text>{type}</Text>
                </Box>

                <Box width='100%' my='5'>
                    <Flex direction="row">
                        <Icon as={FontAwesome} name="whatsapp" color='green.400' size={45} />
                        <Text fontSize='15' color='gray.400' bold mt='2' ml='2'>{phone} </Text>
                    </Flex>
                </Box>

                <Box width='100%' backgroundColor='gray.200' height='2px' />

                <Box width='80%' mt="5">
                    <Flex direction="row">
                        <Icon as={EvilIcons} name="location" color='blue.400' size={41} />
                        <Text fontSize='15' bold color='gray.400'>{adress}</Text>
                    </Flex>
                </Box>
            </Flex>

        </Box>
    );
}