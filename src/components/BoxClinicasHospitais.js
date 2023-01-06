import React from "react";
import { Box, Text,Icon, Flex, } from 'native-base'
import { Ionicons,Entypo, EvilIcons } from "@expo/vector-icons";

export function BoxClinicasHopistais(props) {
    const title = props.title;
    const phone = props.phone;
    const adress = props.adress
   
    return (
        <Box width='90%' backgroundColor='white' borderRadius={10} shadow={3} mt='6' alignItems='center'>
            <Flex direction="row" py={5} px={10}>
                <Text fontSize='20' mr={5} bold color='gray.500'>{title}</Text>
                <Icon as={Entypo} name="star" color='yellow.400' size={35} />
            </Flex>

            <Box width='100%' backgroundColor='gray.200' height='2px' />

            <Box width='100%' py={5} alignItems='center'>
                <Flex direction="row">
                    <Icon as={Ionicons} name="call" color='green.600' size="2xl" mr={1} />
                    <Text fontSize='16'>{phone}</Text>
                </Flex>
            </Box>

            <Box width='100%' backgroundColor='gray.200' height='2px' />

            <Box width='90%' p={5} alignItems='center'>
                <Flex direction="row">
                    <Icon as={EvilIcons} name="location" color='green.600' size="2xl" />
                    <Text fontSize='16'>{adress}</Text>
                </Flex>
            </Box>
        </Box>
    );
}
//Rua Doutor Castro Menezes, 155- Vila Assunção, Porto Alegre - RS