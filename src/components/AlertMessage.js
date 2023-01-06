import React from "react";
import { Collapse, Alert, HStack, Text } from 'native-base'

export function AlertMessage(props) {
    return (
        <Collapse display={props.visible} isOpen={props.show}>
            <Alert w="100%" status={props.alerttype}>
                <HStack space={2} alignItems="center">
                    <Alert.Icon />
                    <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                        {props.message}
                    </Text>
                </HStack>
            </Alert>
        </Collapse>
    )
}