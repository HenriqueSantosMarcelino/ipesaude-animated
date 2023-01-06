import { Button as ButttonNativeBase, Text } from "native-base";

export function Button({ title, navlink, navigation, ...rest }) {
  return (
    <ButttonNativeBase
      rounded={100}
      bg='white'
    
      marginRight={2}
      marginBottom={2}
      shadow='items'
      onPress={() => navigation.navigate(navlink)}
      _pressed={{ bgColor: 'gray.300' }}
      {...rest}
    >
      <Text
        fontFamily='title'
        fontSize='md'
        color='gray.500'
      >
        {title}
      </Text>
    </ButttonNativeBase >
  )
}