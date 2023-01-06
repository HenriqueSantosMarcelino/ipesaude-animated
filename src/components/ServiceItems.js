import { Button as ButtonNativeBase, IButtonProps, Icon, IIconProps, Heading } from 'native-base';

export function ServiceItems({ title, iconFamily, iconName, navigation, navlink, aspectRatioValue, iconSize, headingSize, ...rest }) {
  return (
    <ButtonNativeBase
      backgroundColor='white'
      rounded={10}
      padding={1}
      margin={2}
      alignItems='center'
      justifyContent='center'
      width={110}
      height={110}
      shadow='items'
      _pressed={{ bgColor: 'gray.300' }}
      onPress={() => navigation.navigate(navlink)}
      {...rest}
    >
      <Icon
        as={iconFamily}
        name={iconName}
        color='orange.500'
        size={iconSize ?? 8}
        marginBottom={1}
        alignSelf='center'
        style={{aspectRatio: aspectRatioValue ?? 1 }}
      />
      <Heading 
      fontFamily='complement'
      color='gray.800' 
      size='sm' 
      textAlign='center' 
      fontSize={headingSize ?? 14}
      >
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}