import { Box, Heading } from 'native-base'

export function ItemsBox({ title, children, ...rest }) {
  return (
    <Box
      width='90%'
      padding={3}
      backgroundColor='gray.200'
      rounded={20}
      borderColor='gray.200'
      borderWidth={2}

      shadow='box'

      // shadowColor='black'      
      // shadowOpacity={0.08}
      // shadowOffset={{
      //   width: 0,
      //   height: 4,
      // }}
      // shadowRadius={8}
      
      



      marginBottom={4}
      alignItems='center'
      {...rest}
    >
      <Heading
        fontSize='md'
        fontFamily='title2'
        color='gray.800'
        fontWeight='bold'
        alignSelf='flex-start'
        mt={1}
        mb={2}
        ml={2}
      >
        {title}
      </Heading>

      <Box
        flexDirection="row"
        justifyContent='space-between'
      >
        {children}
      </Box>
    </Box>
  )
}