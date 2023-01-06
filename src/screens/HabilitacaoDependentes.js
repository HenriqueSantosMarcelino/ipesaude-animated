//Esta pág faz parte da Habilitação de dependentes, ela poderia se juntar às outras em componentes ou em um case switch!!
//Além disso é interessante rever o código e ver se é possível simplificar!!
import React, { useState, useEffect } from 'react';
import {  Box,  Text,  Link,    View,  VStack,  Button} from 'native-base';
export default function HabilitacaoDependentes({ navigation }) {
  const opcoes = [
    { name: "Filho(a) recém-nascido(a)", navlink: 'FilhoRecemNasc'},
    { name: "Filhos(as) menores de 18 anos", navlink: 'HabilitacaoDeFilho' },
    { name: "Filhos(as) estudantes de 18 a 24 anos", navlink: 'HabilitacaoFilhos24'},
    { name: "Cônjuges civilmente casados", navlink: 'ConjugeCasados'},
    { name: "Ex-cônjuge com pensão alimentícia", navlink: 'ExConjuge'},
  ];

  return (
    <View width="100%" backgroundColor="gray.100">
      <VStack mb={1} backgroundColor="#fff" p={4}>
        <Text color="orange.400" fontSize={14} fontWeight="bold">
          Habilitações que não exigem processo:
        </Text>
        <Text color="gray.500" fontSize={10}>
          Selecione o grau de dependência desejado.
        </Text>
      </VStack>
      <VStack alignItems="center" mb={1} data={opcoes}>
        <Button w="full" backgroundColor="#fff" navigation={navigation} onPress={() => navigation.navigate('FilhoRecemNasc')}>
          <Text fontWeight="bold" color="#777">
            Filho(a) recém-nascido(a)
          </Text>
        </Button>
        <Button w="full" backgroundColor="#gray.100" navigation={navigation} onPress={() => navigation.navigate('HabilitacaoDeFilho')}>
          <Text fontWeight="bold" color="#777">
            Filhos(as) menores de 18 anos
          </Text>
        </Button>
        <Button w="full" backgroundColor="#fff" navigation={navigation} onPress={() => navigation.navigate('HabilitacaoFilhos24')}>
          <Text fontWeight="bold" color="#777">
            Filhos(as) estudantes de 18 a 24 anos
          </Text>
        </Button>
        <Button w="full" backgroundColor="#gray.100">
          <Text fontWeight="bold" color="#777" navigation={navigation} onPress={() => navigation.navigate('ConjugeCasados')}>
            Cônjuges civilmente casados
          </Text>
        </Button>
        <Button w="full" backgroundColor="#fff">
          <Text fontWeight="bold" color="#777" navigation={navigation} onPress={() => navigation.navigate('ExConjuge')}>
            Ex-cônjuge com pensão alimentícia
          </Text>
        </Button>
      </VStack>
      <Box
        width="100%"
        mb={1}
        px={4}
        py={2}
        backgroundColor="#fff"
        shadow="4"
        _text={{ color: 'orange.400', fontSize: 16, fontWeight: 'bold' }}>
        Informações importantes:
      </Box>
      <Text color="#777" fontSize={12} p={2}>
        A inclusão de dependentes legais é feita sem qualquer acréscimo na
        contribuição mensal do segurado principal. Para algumas classes de
        dependentes, a habilitação é simples, não necessita de abertura de
        processo. É o caso de cônjuges (civilmente casados); filhos(as) menores
        de 18 anos; filhos(as) estudantes de 18 a 24 anos ; ex cônjuge e
        ex-convivente com pensão alimentícia em nome próprio (e não aqueles que
        recebem em nome de filhos).{" "}
        <Link href="#" isExternal _text={{
        color: "orange.400"
      }} mt={-0.5} _web={{
        mb: -2
      }}>
          Para mais informações clique aqui.
        </Link> 
      </Text>
    </View>
  );
}
