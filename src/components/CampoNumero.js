import React, { useState } from 'react';
import {
    Box, Input, Icon, Flex, ScrollView, Center,
    Link, Button, Text, FormControl, AlertDialog,
    IconButton, CloseIcon, HStack, VStack, Alert, Actionsheet, useDisclose
} from 'native-base'
import { TextInputMask } from 'react-native-masked-text'
import { EvilIcons } from "@expo/vector-icons";
import * as DocumentPicker from 'expo-document-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { UploadFile } from '../screens/fileUpload'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { ScanDoc } from './ScanDoc';
import { CampoTexto } from './CampoTexto';

export function CampoNumero(props) {
    const title = props.title;
    const value = props.value;
    const onChangeText = props.onChangeText;
    const type = props.type;
    return (
        <FormControl mt="2">
            <FormControl.Label ml={1}>{title}</FormControl.Label>
            <Box shadow="1">
                <TextInputMask type={type} backgroundColor="white"
                    borderWidth={0} borderRadius={8} height={45}
                    paddingLeft={10} fontSize={15}
                    value={value} onChangeText={onChangeText}
                />
            </Box>
        </FormControl>
    )
}
