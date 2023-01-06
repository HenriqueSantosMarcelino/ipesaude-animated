//Cartão Pessoal, precisa ser atualizado dependendo do usuário logado, isso se conecta com o banco de dados e o context!! Sugestão Juntar o context com user
import { Text, Flex, Box, Icon } from 'native-base'
import { ImageBackground, Dimensions, PixelRatio } from 'react-native'
import LogoIPE from '../assets/Logo_IPE_saude.svg'
import LogoBanrisul from '../assets/Logo_Banrisul.svg'
import { MaterialCommunityIcons } from "@expo/vector-icons"

const { 
  width: SCREEN_WIDTH, 
  height: SCREEN_HEIGHT 
  } = Dimensions.get('window');

const widthBaseScale = SCREEN_WIDTH / 375;
const heightBaseScale = SCREEN_HEIGHT / 812;

function normalize(size, based = 'width') {
  const newSize = (based === 'height') ? 
                  size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const heightPixel = (size) => {
  return normalize(size, 'height');
};

const fontPixel = (size) => {
  return heightPixel(size);
};

export function UserCard() {
  return (
    <ImageBackground 
    source={require('../assets/cartao.png')}
    resizeMode='stretch'
    style={{width:0.83*SCREEN_WIDTH, height: 4/8*SCREEN_WIDTH, maxWidth: 400  }}
    borderRadius={10}
    >
      <Flex marginBottom={55} padding={4} flexDirection='row' justifyContent={'space-between'}>
        <Box display='flex' flexDirection='row'>
          <Box left='auto'>
            <LogoIPE height={30} position={'absolute'} left={-130}/>
            <LogoBanrisul height={30}  position={'absolute'} left={-270}/>
          </Box>
        </Box>
        <Icon as={MaterialCommunityIcons} name='contactless-payment' size='md' color={'white'}/>
      </Flex>


      <Flex direction='row' width='100%' padding={4} >
          <Flex direction='column' marginRight={10}>
              <Text  color='white' fontSize={fontPixel(20)} lineHeight={fontPixel(40)} fontFamily='virtualCard' fontWeight={'600'} >
                63.00123456.01.6
              </Text>

              <Text  color='white' fontSize={fontPixel(16)} fontFamily='virtualCard' fontWeight={'400'}>
                MARIA SANTOS DA SILVA
              </Text>
          </Flex>
          <Flex direction='column'>
              <Text  color='white' fontSize={fontPixel(16)} lineHeight={fontPixel(40)} fontFamily='virtualCard' fontWeight={'400'}>
                01/01/1975
              </Text>

              <Text  color='white' fontSize={fontPixel(16)} fontFamily='virtualCard' fontWeight={'400'}>
                PAMES
              </Text>
          </Flex>
      </Flex>
    </ImageBackground>

  );
}