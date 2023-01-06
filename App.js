//Básicos
import React, { useEffect, useCallback, useState } from 'react';
import { NativeBaseProvider, StatusBar, View } from 'native-base';
//Parte da Navegação e Login
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/Routes';
import { AuthProvider } from './src/contexts/AuthProvider';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
//Estilos
import { THEME } from './styles/theme';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black } from '@expo-google-fonts/roboto';
import { Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { Inconsolata_400Regular, Inconsolata_500Medium, Inconsolata_600SemiBold, } from '@expo-google-fonts/inconsolata';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
// Tela de Carregamento!
//SplashScreen.preventAutoHideAsync();

function CustomStatusBar({ backgroundColor, barStyle = "dark-content" }) {
  const insets = useSafeAreaInsets()
  return (
    <View style={{ height: insets.top, backgroundColor }}>
      <StatusBar translucent animated={true} backgroundColor={backgroundColor} barStyle={'default'} />
    </View>
  )
}

//Adicionar IpeLogo no app
export default function App() {
  //const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = 
  useFonts({ Roboto_400Regular, Roboto_500Medium, 
    Roboto_700Bold, Roboto_900Black, Inter_400Regular, 
    Inter_700Bold, Inconsolata_400Regular, Inconsolata_500Medium, 
    Inconsolata_600SemiBold, Poppins_500Medium ,Poppins_600SemiBold})

  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       // Aqui nós podemos esperar o contato da API, busca de infos no banco de dados e afins!
  //       //await Font.loadAsync(THEME.fontConfig);
  //       // Se for necessário testar, pode tirar essa parte do comentário!
  //       //await new Promise(resolve => setTimeout(resolve, 2000));
  //       if(!fontsLoaded) {
  //         return null;
  //       }
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       // Tell the application to render
  //       setAppIsReady(true);
  //     }
  //   }

  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     // This tells the splash screen to hide immediately! If we call this after
  //     // `setAppIsReady`, then we may see a blank screen while the app is
  //     // loading its initial state and rendering its first pixels. So instead,
  //     // we hide the splash screen once we know the root view has already
  //     // performed layout.
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={THEME} //onLayout={onLayoutRootView}
    >
      <AuthProvider>
        <SafeAreaProvider>
          <NavigationContainer >
            <CustomStatusBar backgroundColor={THEME.colors.orange[500]} />
            <Routes />
          </NavigationContainer>
        </SafeAreaProvider>
      </AuthProvider>
    </NativeBaseProvider>
  );
}

