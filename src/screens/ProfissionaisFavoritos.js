import React from "react";
import { Box, Text, ScrollView, View } from 'native-base'
import { SearchBar } from "../components/SearchBar";
import { BoxClinicasHopistais } from "../components/BoxClinicasHospitais";
import { DoctorComponent } from "../components/DoctorComponent";

export default function ProfissionaisFavoritos({navigation}) {
    return (
        <ScrollView width="100%" backgroundColor='#eee'>
            
            <View backgroundColor='orange.500' height={55} alignItems='center' paddingY={2} flexDirection='row' borderBottomRadius={15}>
                <Icon as={MaterialCommunityIcons} name='arrow-left' size={6} color='white' mr={7} ml={5} onPress={() => navigation.goBack()} />
                <Text fontSize={20} color='white'>Profissionais Favoritos</Text>
            </View>
            <View alignItems='center' pb={5}>

                {/* barra de pesquisa*/}
                <Box padding={5}>
                    <SearchBar   placeholderTitle={"| Pesquisar"} />
                </Box>

                <Box shadow={3} backgroundColor='white' width='100%' padding={2} alignItems='center' mb={5}>
                    <Text color='orange.500' bold fontSize={16}>
                        Médicos
                    </Text>
                </Box>

                {/*Medicos e seus horarios */}
               <DoctorComponent title={"Amanda Pinto Sobrosa Lopes"} type={"Pediatra"}  phone={"9 9121-6108"} adress={"Rua Gomes Jardim, 201 sala 708 - Santana, Porto Alegre - RS"}   />

                <Box shadow={3} my={5} backgroundColor='white' width='100%' padding={2} alignItems='center'>
                    <Text color='orange.500' bold fontSize={16}>
                        Clínicas e Hospitais
                    </Text>
                </Box>

                 {/*Clinicas e hospitais */}
                <BoxClinicasHopistais title={"Hospital da Brigada Militar de Porto Alegre"} phone={"(51) 3288-3500 / (51) 3288-3509"} adress={"Rua Doutor Castro Menezes, 155- Vila Assunção, Porto Alegre - RS"} />
                <BoxClinicasHopistais title={"Hospital São Lucas da PUCRS"} phone={"(51) 3288-3500 / (51) 3288-3509"} adress={"Avenida Ipiranga, 6690- Partenon, Porto Alegre - RS"} />
            </View>
        </ScrollView>
    );
}