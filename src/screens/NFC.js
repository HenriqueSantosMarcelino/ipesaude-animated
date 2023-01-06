// import React, { useState } from 'react';
// import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import { HCESession, NFCTagType4NDEFContentType, NFCTagType4 } from 'react-native-hce';

import { render } from "react-dom";

 export default function App() {
    render
 }

//     const [sim, setSim] = useState('');
//     const [text, onChangeText] = React.useState('');

//     let session;

//     const startSession = async () => {
//         setSim('Simulando...');
//         try {
//             const tag = new NFCTagType4({
//                 type: NFCTagType4NDEFContentType.Text,
//                 content: text,
//                 writable: false,
//             });

//             session = await HCESession.getInstance();
//             session.setApplication(tag);
//             await session.setEnabled(true);
//         } catch (e) {
//             setSim('Erro ao simular.');
//             console.log(e);
//         }
//     };

//     const stopSession = async () => {
//         try {
//             session = await HCESession.getInstance();
//             await session.setEnabled(false);
//             setSim('Simulação pausada');
//         } catch (e) {
//             console.log(e);
//         }
//     };

//     const listen = async () => {
//         try {
//             const removeListener = session.on(HCESession.Events.HCE_STATE_READ, () => {
//                 ToastAndroid.show("Consulta autorizada com sucesso!", ToastAndroid.LONG);
//             });
//             removeListener();
//         } catch (e) {
//             console.log(e)
//         }
//     }

//     listen();

//     return (
//         <View style={styles.container}>
//             <Text>Status:</Text>
//             <Text style={styles.text}>{sim}</Text>
//             <Text>Texto:</Text>
//             <TextInput style={styles.input} onChangeText={onChangeText} />
//             <TouchableOpacity style={styles.btn} onPress={() => startSession()}><Text style={styles.btntext}>Começar a simulação</Text></TouchableOpacity>
//             <TouchableOpacity style={styles.btn} onPress={() => stopSession()}><Text style={styles.btntext}>Parar a simulação</Text></TouchableOpacity>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         marginTop: 50,
//         alignItems: 'center',
//     },
//     input: {
//         borderWidth: 2,
//         width: '70%',
//         alignSelf: 'center',
//         marginBottom: 10,
//         marginTop: 5,
//         padding: 10,
//     },
//     btn: {
//         borderWidth: 2,
//         padding: 10,
//         width: '40%',
//         alignSelf: 'center',
//         margin: 5,
//         alignItems: 'center',
//         backgroundColor: '#666',
//     },
//     btntext: {
//         color: 'white',
//     },
//     text: {
//         marginBottom: 30,
//         marginTop: 5,
//         padding: 10,
//         backgroundColor: '#eee',
//         alignSelf: 'center',
//         width: '80%',
//         borderWidth: 2,
//         borderColor: '#ccc',
//         textAlign: 'center',
//         fontSize: 30,
//     },
// });
