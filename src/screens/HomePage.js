//Esta página é acessada após o login! Ela conecta boa parte das outras screens! Seria interessante criar uma página de "Em Construção!"
//Tbm deveriamos utilizar o Theme para padronizar todas as cores e fontes!!!
import { Box, Text, Center, Input, Icon, Flex, View, FlatList, ChevronRightIcon } from 'native-base'
import { ScrollView } from 'react-native';
import { MaterialIcons, AntDesign, MaterialCommunityIcons, FontAwesome5, Ionicons, Entypo, FontAwesome, Fontisto, Feather } from "@expo/vector-icons";
import VirtualizedScrollView from '../helpers/VirtualizedScrollView';
import { Button as ButtonNativeBase } from 'native-base'

import LogoIPE from '../assets/Logo_IPE_reduzido.svg'
import IconeCartao from '../assets/card_icon.svg'

import { UserCard } from '../components/UserCard';
import { Button } from '../components/Button';
import { ItemsBox } from '../components/ItemsBox';
import { ServiceItems } from '../components/ServiceItems';
import { SearchBar } from '../components/SearchBar';
import { useState } from 'react';
//import Animated from 'react-native-reanimated';

import { SafeAreaView, StyleSheet, Image, Animated } from 'react-native';



export default function HomePage({ navigation }) {
  const buttons = [
    { name: "Guia Médico Hospitalar", icon: 'add-location', navlink: 'GuiaMedicoHospitalar' },
    { name: "Profissionais Preferidos", icon: 'star', navlink: 'ProfissionaisFavoritos' },
    { name: "Boletos", icon: 'qr-code', navlink: 'EmContrucao' },
    { name: "Mais...", icon: 'add-circle', navlink: 'EmContrucao' },
  ];
  const acessoRapido = [
    { name: "Boletos", iconFamily: AntDesign, icon: 'barcode', navlink: 'Boletos' },
    { name: "Reembolso", iconFamily: MaterialCommunityIcons, icon: 'cash-refund', navlink: 'EmContrucao' },
    { name: "Renovação de Estudante", iconFamily: FontAwesome5, icon: 'user-graduate', navlink: 'EmContrucao' },
    { name: "Imposto de Renda", iconFamily: FontAwesome5, icon: 'clipboard-list', navlink: 'EmContrucao' },
  ];

  const atendimentoDigital = [
    { name: "PAC", iconFamily: Ionicons, icon: 'people-sharp' },
    { name: "PAMES", iconFamily: MaterialCommunityIcons, icon: 'heart-plus'},
    { name: "Habilitação de Dependentes", iconFamily: FontAwesome5, icon: 'user-plus', navlink: 'HabilitacaoDeFilho', iconSize: 6, headingSize: 13, aspectRatio: 1.2},
    { name: "Optante/Licenciado", iconFamily: FontAwesome5, icon: 'user-alt', iconSize: 6 },
    { name: "Comunicado de Óbito", iconFamily: MaterialCommunityIcons, icon: 'coffin' },
    { name: "Carta de Portabilidade", iconFamily: Entypo, icon: 'text-document-inverted', headingSize: 13 },
    { name: "2ª Via de Cartão", iconFamily: MaterialIcons, icon: 'layers' },
  ];

  const servicos = [
    { name: "Exame Covid-19 (PCR)", iconFamily: MaterialIcons, icon: 'coronavirus' },
    { name: "Perícia Presencial", iconFamily: MaterialCommunityIcons, icon: 'clipboard-plus' },
    { name: "Telecosnulta", iconFamily: FontAwesome, icon: 'stethoscope' },
    { name: "Guia de Atendimento", iconFamily: Fontisto, icon: 'bed-patient', headingSize: 13 },
    { name: "Histórico de Atendimento", iconFamily: MaterialCommunityIcons, icon: 'folder-multiple-plus', headingSize: 13, iconSize: 7 },
    { name: "Cobertura de Honorários", iconFamily: MaterialCommunityIcons, icon: 'account-search' },
    { name: "Atendimento Presencial", iconFamily: Fontisto, icon: 'person', headingSize: 13, iconSize: 7 },
  ];
  
  const [scrollY, setScrollY] = useState(new Animated.Value(0))
  
  return (
    <SafeAreaView >
     <Box width='100%' bgColor='orange.500'> 
      <Center >
       <Box backgroundColor='orange.500' width='100%' padding={6} marginBottom={0} borderBottomLeftRadius={15} borderBottomRightRadius={15}>
          <View flexDirection='row' alignItems='center' justifyContent='flex-start' ml={-7}>
            <LogoIPE bottom={5} height={25}/>
              <Text fontFamily='title' color='white' fontSize={20} marginBottom={2} alignItems='center' ml={-6}>
                Olá, Maria.
              </Text>
            </View>
            <Input
              backgroundColor='gray.200'
              borderRadius={10}
              fontSize={16}                          
              placeholder="Pesquise o serviço desejado"
              placeholderTextColor="gray.500"              
              InputLeftElement={<Icon as={<MaterialIcons name="search" />} 
              size={6} ml="2" mr='-1.5' color="orange.500" />}
              Input          
              height={45}
              shadow='2'
            />       
        </Box>
      
       <Animated.View
       style={        
        {
          height: scrollY.interpolate({
            inputRange:[10, 120, 145],
            outputRange:[100, 10, 0],
            extrapolate: 'clamp'
          }),
          opacity: scrollY.interpolate({
            inputRange:[1, 80, 170],
            outputRange: [2, 1,0],
            extrapolate: 'clamp'
          })
        }
       }
       >
        <ButtonNativeBase borderRadius={10} shadow='box' p={0} mb='-1' mt="0" _pressed={{ bg: 'white' }} 
           onPress={() => navigation.navigate('CartaoVirtual')}>
            
            <Animated.View
       style={{
        width: scrollY.interpolate({
          inputRange:[0, 120],
          outputRange:[230, 90],
          extrapolate: 'clamp'
        }),
        
      }}
      resizeMode="contain" 
       />  
            <UserCard />
          
          
          </ButtonNativeBase>
            {/* <Animated.View/> */}
        
      </Animated.View>
      </Center>
    
      
      {/* <Animated.View 
      style={[ styles.header,       
        {
          height: scrollY.interpolate({
            inputRange:[10, 120, 145],
            outputRange:[100, 10, 0],
            extrapolate: 'clamp'
          }),
          opacity: scrollY.interpolate({
            inputRange:[1, 80, 170],
            outputRange: [1, 0.5,0],
            extrapolate: 'clamp'
          })
        }]
       }
      
      >
      
       <Animated.Image
       source={require('../assets/ipe_logo-pb.png')}
       style={{
         width: scrollY.interpolate({
           inputRange:[0, 120],
           outputRange:[230, 90],
           extrapolate: 'clamp'
         }),
         height: 90
       }}
       resizeMode="contain" />
       
      </Animated.View> */}
     
     <ScrollView 
     scrollEventThrottle={16}
     onScroll={Animated.event([{
       nativeEvent: {
         contentOffset: { y: scrollY }
       },
     }],
     { useNativeDriver: false })}
     >

      <View alignItems='center' mt='1/3' borderTopRadius={20} bgColor='blueGray.100'>
        <Box>
        <Feather name="minus" size={50} color="#d4d4d4" />
        </Box>
     
        <FlatList
         ml={5}
         mr={5}
          
          data={buttons}
          renderItem={({ item }) => (
            <Button
              title={item.name}
              leftIcon={<Icon as={MaterialIcons} name={item.icon} color='orange.500' size='md' />}
              _pressed={{ bgColor: 'gray.300' }}
              navlink={item.navlink}
              navigation={navigation}
            />
          )}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          

        <ItemsBox title='Acesso Rápido' mt={3}>
            <FlatList
              data={acessoRapido}
              renderItem={({ item }) => (
                <ServiceItems
                  title={item.name}
                  iconFamily={item.iconFamily}
                  iconName={item.icon}
                  nav={item.nav}
                  w={130}
                  navigation={navigation}
                  navlink={item.navlink}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: 'center' }}
            />
          </ItemsBox>

          <ItemsBox title='Atendimento Digital'>
            <FlatList
              data={atendimentoDigital}
              renderItem={({ item }) => (
                <ServiceItems
                  title={item.name}
                  iconFamily={item.iconFamily}
                  iconName={item.icon}
                  marginRight={2}
                  navigation={navigation}
                  navlink={item.navlink}
                  iconSize={item.iconSize}
                  headingSize={item.headingSize}
                  aspectRatioValue={item.aspectRatio}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
            <ChevronRightIcon opacity={0.4} style={{ position: 'absolute', alignSelf: 'flex-end', top: -20, right: 5 }} />
            <ChevronRightIcon opacity={0.6} style={{ position: 'absolute', alignSelf: 'flex-end', top: -20, right: 0 }} />
          </ItemsBox>

          <ItemsBox title='Serviços'>
            <FlatList
              data={servicos}
              renderItem={({ item }) => (
                <ServiceItems
                  title={item.name}
                  iconFamily={item.iconFamily}
                  iconName={item.icon}
                  iconSize={item.iconSize}
                  headingSize={item.headingSize}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
            <ChevronRightIcon opacity={0.4} style={{ position: 'absolute', alignSelf: 'flex-end', top: -20, right: 5 }} />
            <ChevronRightIcon opacity={0.6} style={{ position: 'absolute', alignSelf: 'flex-end', top: -20, right: 0 }} />
          </ItemsBox>        
        <View style={styles.box}></View>
        
      </View>

     

     </ScrollView>
      
      
      </Box>      
    </SafeAreaView>
   );
 }
 
 const styles = StyleSheet.create({
   header:{
     backgroundColor: '#f07e26',
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between',
     paddingRight: 10,
     paddingLeft: 10,
     
     borderBottomWidth: 2,
     borderBottomColor: '#FFF'
   },
   box:{
     height: 300,
     backgroundColor: '#DDD',
     margin: 7,
     marginTop: 50,
     borderRadius: 5
   }
 });