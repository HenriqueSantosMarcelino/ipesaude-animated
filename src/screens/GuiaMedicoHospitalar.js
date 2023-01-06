import { Stack, HStack, Button, Text, Input, Select, CheckIcon, Checkbox, View, Icon, Box } from 'native-base'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import React, { useState, useEffect } from 'react'

export default function GuiaMedicoHospitalarServicos({ navigation }) {
    const [service, setService] = useState();
    const [especialidade, setEspecialidade] = useState();
    const [cidades, setCidades] = useState();

    const [ botaoServico, setBotaoServico ] = useState(true);
    const [ botaoEmergencia, setBotaoEmergencia ] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            // get the data from the api
            const data = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/RS/municipios');
            // convert data to json
            const json = await data.json();
            return json;
        }

        const result = fetchData().catch(console.error)
        setCidades(result)
    }, [])

    return (
        <Box>
            <View backgroundColor='orange.500' height={55} alignItems='center' paddingY={2} flexDirection='row' borderBottomRadius={15}>
                <Icon as={MaterialCommunityIcons} name='arrow-left' size={6} color='white' mr={7} ml={5} onPress={() => navigation.goBack()} />
                <Text fontSize={20} color='white'>Guia Médico -
                    {botaoServico == true ? (<Text> Serviços</Text>):(<Text> Emergência</Text>)}
                    
                </Text>
            </View>

            <Stack w="80%" h="100%" mx="auto" alignItems="center" justifyContent="flex-start" marginY="10">
                <HStack space={5}>
                    <Button 
                        borderColor="gray.300" 
                        borderWidth="2" 
                        borderRadius="20" w="45%" 
                        bg="white" 
                        color="amber.100" 
                        fontWeight="bold" 
                        isPressed={botaoServico}
                        onPress={() => {
                            setBotaoServico(!botaoServico)
                            setBotaoEmergencia(!botaoEmergencia)
                        }}
                        _pressed={{
                            _text: { color: 'orange.500' },
                            backgroundColor: 'white',
                            borderColor: 'orange.500'
                        }}
                        _text={{ color: "gray.300" }} 
                    >Serviços</Button>
                    <Button
                        borderColor="gray.300" borderWidth="2" borderRadius="20" w="45%" bg="white" fontWeight="bold" 
                        isPressed={botaoEmergencia}
                        onPress={() => {
                            setBotaoServico(!botaoServico)
                            setBotaoEmergencia(!botaoEmergencia)
                        }} 
                        _pressed={{
                            _text: { color: 'orange.500' },
                            backgroundColor: 'white',
                            borderColor: 'orange.500'
                        }}
                        _text={{ color: "gray.300" }} >Emergência</Button>
                </HStack>

                {botaoServico == true ? (
                    <Stack alignItems="center" justifyContent="flex-start">
                        <Text marginTop="5" alignSelf="flex-start" bold color="gray.800" fontSize="md">Serviço</Text>
                        <Select borderColor="orange.500" borderRadius="10" bg="white" shadow={3} selectedValue={service} minWidth="100%" accessibilityLabel="Escolha uma opção:" placeholder="Selecione o tipo de serviço" _selectedItem={{
                            endIcon: <CheckIcon />
                        }} _light={{
                            bg: "white"
                        }}
                            onValueChange={itemValue => setService(itemValue)}>
                            <Select.Item label="Médicos" value="medicos" />
                            <Select.Item label="Cirurgiões Buco-maxilo-faciais" value="2" />
                            <Select.Item label="Laboratórios" value="3" />
                            <Select.Item label="Exames" value="4" />
                            <Select.Item label="Clínicas" value="5" />
                            <Select.Item label="Hospitais" value="6" />
                            <Select.Item label="Serviços de atendimento especializado" value="7" />
                        </Select>

                        {service == "medicos"
                            ?
                            <View>
                                <Text marginTop="5" alignSelf="flex-start" bold color="gray.800" fontSize="md">Especilidade</Text>
                                <Select mt="2" borderColor="orange.500" borderRadius="10" bg="white" shadow={3} selectedValue={especialidade} minWidth="100%" accessibilityLabel="Escolha uma opção:" placeholder="Selecione a especialidade:" _selectedItem={{
                                    endIcon: <CheckIcon />
                                }} _light={{
                                    bg: "white"
                                }}
                                    onValueChange={itemValue => setEspecialidade(itemValue)}>
                                    <Select.Item label="Alergia e Imunologia" value="medicos" />
                                    <Select.Item label="Anestesiologia" value="2" />
                                    <Select.Item label="Angiologia" value="3" />
                                    <Select.Item label="Angiologia e Cirurgia Vascular" value="4" />
                                    <Select.Item label="Broncoesofalogia" value="5" />
                                    <Select.Item label="Cancerologia" value="6" />
                                    <Select.Item label="Cancerologia / Cancerologia Pediátrica" value="7" />
                                </Select>
                            </View>
                            : <></>
                        }

                        <Text marginTop="5" alignSelf="flex-start" bold color="gray.800" fontSize="md">Município</Text>
                        <Input borderColor="orange.500" borderRadius="10" bg="white" mx="3" placeholder="Digite o nome do município" w="100%" />
                        {/*<Select mt="2" borderColor="orange.500" borderRadius="10" bg="white" shadow={3} selectedValue={cidades} minWidth="100%" accessibilityLabel="Escolha uma opção:" placeholder="Selecione a cidade:" _selectedItem={{
                            endIcon: <CheckIcon />
                        }} _light={{
                            bg: "white"
                        }}
                            onValueChange={itemValue => setCidades(itemValue)}>
                            <Select.Item label='t' value="7" />
                            {/*{cidades.map((c) => { return <Select.Item label={c} value="medicos" /> })}
                        </Select>*/}

                        <Text marginTop="5" alignSelf="flex-start" bold color="gray.800" fontSize="md">Prestador (opicional)</Text>
                        <Input borderColor="orange.500" borderRadius="10" bg="white" placeholder="Digite o nome do prestador" w="100%" />
                    </Stack>
                ):(
                    <Stack alignItems="center" justifyContent="flex-start">
                        <Text marginTop="5" alignSelf="flex-start" bold color="gray.800" fontSize="md">Tipo de atendimento</Text>
                        <Select borderColor="orange.500" borderRadius="10" bg="white" shadow={3} selectedValue={service} minWidth="100%" accessibilityLabel="Escolha uma opção:" placeholder="Selecione o tipo de serviço" _selectedItem={{
                            endIcon: <CheckIcon />
                        }} _light={{
                            bg: "white"
                        }}
                            onValueChange={itemValue => setService(itemValue)}>
                            <Select.Item label="teste1" value="teste1" />
                            <Select.Item label="teste2" value="teste2" />
                            <Select.Item label="teste3" value="teste3" />
                            <Select.Item label="teste4" value="teste4" />
                            <Select.Item label="teste5" value="teste5" />
                        </Select>

                        <Text marginTop="5" alignSelf="flex-start" bold color="gray.800" fontSize="md">Município</Text>
                        <Input borderColor="orange.500" borderRadius="10" bg="white" mx="3" placeholder="Digite o nome do município" w="100%" />

                        <Text marginTop="5" alignSelf="flex-start" bold color="gray.800" fontSize="md">Prestador (opicional)</Text>
                        <Input borderColor="orange.500" borderRadius="10" bg="white" placeholder="Digite o nome do prestador" w="100%" />
                    </Stack>
                )}

                <Checkbox marginY="5" maxWidth="80%" size="sm" value="test" _checked={{bgColor:'green.500', borderColor: 'green.500'}}>Exibir resultados em municípios próximos</Checkbox>

                <Button 
                    borderRadius="20" bg="green.500" shadow={3} px="20" size="lg"
                    _pressed={{backgroundColor: 'green.500', opacity:0.5}}
                >Buscar</Button>
        </Stack>
        </Box>
        
    )
}