import { Box, Input,FormControl} from 'native-base'



export function CampoTexto(props) {
    const title = props.title;
    const value = props.value;
    const onChangeText = props.onChangeText;
    const keyboardType = props.keyboardType;
    return (
            <FormControl mt="2">
                <FormControl.Label ml={1}>{title}</FormControl.Label>
                <Box shadow="1">
                    <Input backgroundColor="white"
                        borderWidth={0} borderRadius={8} height={45}
                        fontSize={15}
                        value={value} onChangeText={onChangeText}  keyboardType={keyboardType}/>
                </Box>
            </FormControl>
        
    );

}