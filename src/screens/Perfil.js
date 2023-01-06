import React, { useContext, useState } from 'react'
import { Avatar, Button, Icon, Box, Text, FlatList, View } from 'native-base';
import { AuthContext } from '../contexts/AuthContext';
import Users from '../JSON/users.json'
import { UserData } from '../components/UserData';
import { UserPlanData } from '../components/UserPlanData';
import Ionicons from '@expo/vector-icons/Ionicons';
import VirtualizedScrollView from '../helpers/VirtualizedScrollView';

// import { StyleSheet, View, Image } from 'react-native';
// import ImageViewer from '../components/ImageViewer';
// const PlaceholderImage = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=8";

import { UploadImage } from '../components/UploadImage';
import * as ImagePicker from 'expo-image-picker';
import { storage } from '../../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

//ATENÇÃO!!! A Day construiu um código para add a foto, Comentei a parte de cima q é de pick do Kauan
//Dar uma limpada no código!!! Talvez criar componentes e afins!

export default function Perfil() {
  const { logout } = useContext(AuthContext);
  //const [selectedImage, setSelectedImage] = useState(null);

  // const pickImageAsync = async () => {
  //     let result = await ImagePicker.launchImageLibraryAsync({
  //     allowsEditing: true,
  //     quality: 1,
  //     });

  //     if (!result.canceled) {
  //     setSelectedImage(result.assets[0].uri);
  //     } else {
  //     alert('You did not select any image.');
  //     }
  // };

  /*const pickCamera = async () => {

      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        
      });
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };*/
  /////////////// SELECIONAR UMA IMAGEM //////////////////////////
  const [showImageSelectionOptions, setShowImageSelectionOptions] =
    useState(false)

  const [selectedImage, setSelectedImage] = useState(null)
  const [imageFirebaseCloudName, setImageFirebaseCloudName] = useState('')
  const [imageFirebaseDownloadUrl, setImageFirebaseDownloadUrl] = useState('')

  const pickImageFromLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1
    })

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      setShowImageSelectionOptions(false)
      console.log(result.assets[0])
      uploadImage()
    }
  }

  const pickImageFromCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1
    })

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      setShowImageSelectionOptions(false)
      console.log(result.assets[0].uri)
      uploadImage()
    }
  }

  const pickImage = async () => {
    setShowImageSelectionOptions(true)
  }
  const cancelImageSelection = async () => {
    setShowImageSelectionOptions(false)
  }
  ////////////////////////////////////////////////////////////////

  /////////////////// FAZER UPLOAD DA IMAGEM/////////////////////

  const uploadImage = async () => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.onload = function () {
        resolve(xhr.response)
      }
      xhr.onerror = function () {
        reject(new TypeError('Network request failed'))
      }
      xhr.responseType = 'blob'
      xhr.open('GET', selectedImage, true)
      xhr.send(null)
    })
    setImageFirebaseCloudName(selectedImage.split('/')[11])
    const storageRef = ref(storage, `avatars/${imageFirebaseCloudName}`)
    const uploadTask = uploadBytesResumable(storageRef, blob, {
      contentType: 'image/png'
    })

    uploadTask.on(
      'state_changed',
      snapshot => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log('Upload is ' + progress + '% done')
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused')
            break
          case 'running':
            console.log('Upload is running')
            break
        }
      },
      error => {
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break
          case 'storage/canceled':
            // User canceled the upload
            break
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          setImageFirebaseDownloadUrl(downloadURL)
          console.log('File available at', downloadURL, imageFirebaseCloudName)
        })
      }
    )
  }
  //////////////////////////////////////////////////////////////

  const placeholderImageSource =
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=8'
  return (
    <Box>
      {showImageSelectionOptions ? (
        <View
          justifyContent="center"
          alignItems="center"
          height="full"
          padding={10}
        >
          <Button
            width="full"
            mb={6}
            onPress={pickImageFromLibrary}
            borderRadius="full"
            bgColor="green.500"
          >
            <Text fontFamily="text" fontWeight="700" color="white">
              Selecionar imagem da biblioteca
            </Text>
          </Button>
          <Button
            width="full"
            mb={6}
            onPress={pickImageFromCamera}
            borderRadius="full"
            bgColor="green.500"
          >
            <Text fontFamily="text" fontWeight="700" color="white">
              Abrir a câmera
            </Text>
          </Button>
          <Button
            width="full"
            onPress={cancelImageSelection}
            borderRadius="full"
            bgColor="green.500"
          >
            <Text fontFamily="text" fontWeight="700" color="white">
              Cancelar
            </Text>
          </Button>
        </View>
      ) : (
        <VirtualizedScrollView
          showsVerticalScrollIndicator={false}
          w="100%"
          h="100%"
          p={4}
        >
          <Box
            flexDirection="row"
            w="95%"
            alignSelf="center"
            shadow={3}
            bg="#fff"
            borderRadius={50}
            p="3"
            alignItems="center"
            mt={3}
            mb={3}
          >
            {/*  /////////////////////////////////////////// */}

            <UploadImage
              selectedImage={selectedImage}
              placeholderImageSource={placeholderImageSource}
              onPress={pickImage}
              marginRight={5}
            />

            {/*  /////////////////////////////////////////// */}
            {/*             <Avatar
                size="lg"
                bg="#fff"
                marginRight={5}
                source={{
                  uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=8'
                }}
              ></Avatar> */}
            <Box flexDirection="column">
              <Text fontSize={18} color="gray.600" fontWeight="bold">Maria Santos da Silva</Text>
              <Text fontSize={14} color="gray.600" fontWeight="bold">63.00123456.01.6</Text>
            </Box>
          </Box>

          <Box flexDirection="column" w="90%" shadow={3} bg="white" borderRadius={10} mb={2} alignItems="center" alignSelf="center" >
            <FlatList
              data={Users}
              vertical
              keyExtractor={(item, index) => index.toString()}
              listKey={(item) => item.toString()}
              renderItem={({ item }) => (
                <UserData
                  title={'Dados Cadastrais:'}
                  email={item.personalData.email}
                  gender={item.personalData.gender}
                  company={item.personalData.company}
                  phone={item.personalData.phone}
                  adress={item.personalData.address}
                  zipcode={item.personalData.zipcode}
                />
              )}
              width='100%'
            />
            <Button
              m={2} rounded={100} px={4} bg="green.500" leftIcon={<Icon as={Ionicons} name="create-outline" size={18} />} width='95%' shadow={2}
              _pressed={{ backgroundColor: 'green.500', opacity: 0.5 }}
            >
              <Text color="white" fontWeight="bold">Editar dados</Text>
            </Button>
          </Box>

          <Box flexDirection="column" w="90%" shadow={3} bg="white" borderRadius={10} mb={2} mt={4} alignItems="center" alignSelf="center" >
            <FlatList
              data={Users}
              vertical
              keyExtractor={(item, index) => index.toString()}
              listKey={(item) => item.toString()}
              renderItem={({ item }) => (
                <UserPlanData
                  title={'Dados do plano:'}
                  title2={'Grupo Familiar'}
                  planclass={item.planData.planclass}
                  category={item.planData.category}
                  carencia={item.planData.carencia}
                  familyGroup={item.familyGroup}
                />
              )}
              width='100%'
            />
          </Box>
          <Button w='50%' alignSelf='center' mt='3' mb='10' onPress={() => logout()} leftIcon={<Icon as={Ionicons} name="exit" size="lg" />}>
            Sair
          </Button>
        </VirtualizedScrollView>
      )}
    </Box>
  )
}