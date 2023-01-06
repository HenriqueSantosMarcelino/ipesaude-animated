import React from "react";
import {Input} from "native-base";
import { Icon} from 'native-base'
import { MaterialIcons } from "@expo/vector-icons";

// Barra de pesquisa exemplo na tela homepages ou na tela profissionais favoritos
export function SearchBar(props) {
    const title = props.placeholderTitle;
    return(
    <Input
        width='100%'
        placeholder={title}
        placeholderTextColor="gray.500"
        fontSize='md'
        backgroundColor='gray.100'
        borderRadius='15'
        shadow='2'
        InputLeftElement={<Icon as={<MaterialIcons name="search" />} size={5} ml="2" mr='-1' color="orange.500" />}
    />
    );
}