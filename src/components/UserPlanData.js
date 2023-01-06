//Situação do Usuário, vincular com banco de dados e context! Sugestão Criar componente usuário com context!
import React, {useState} from "react";
import { Box, FlatList, Text, View } from 'native-base'


export function UserPlanData(props) {
    const { title, title2, planclass, category, carencia, familyGroup } = props
    const familyGroupLength = Object.keys(familyGroup).length
    return(
        <View>
            <Text color="orange.500" fontWeight="bold" fontSize={16} ml={4} mt={4} mb={1}>{title}</Text>
            <Text color="gray.500" p={1} fontWeight="bold" pl={4} bg="gray.200">Classe Internação: <Text fontWeight="normal">{planclass}</Text></Text>
            <Text color="gray.500" p={1} fontWeight="bold" pl={4}>Categoria: <Text fontWeight="normal">{category}</Text></Text>
            <Text color="gray.500" p={1} fontWeight="bold" pl={4} bg="gray.200">Carências: <Text fontWeight="normal">{carencia}</Text></Text>
            <Text color="orange.500" fontWeight="bold" fontSize={16} ml={4} mt={4} mb={1}>{title2}</Text>
            <Text color="gray.500" p={1} fontWeight="bold" pl={4} bg="gray.200"><Text fontWeight="normal">{familyGroup[0].name}</Text></Text>
            <Text color="gray.500" p={1} fontWeight="bold" pl={4} mb={1}><Text fontWeight="normal">{familyGroup[1].name}</Text></Text>            
        </View>
    )
}