import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';

import { ThemeProvider } from 'styled-components';
import {Dashboard} from './src/screens/Dashboard';
import theme from './src/global/theme';
import AppLoading from 'expo-app-loading';
import {NavigationContainer} from '@react-navigation/native'
import{
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold

} from '@expo-google-fonts/poppins'
import DashboardTeste from './src/screens/DashboardTeste';
import { AppRoutes } from './src/routes/App.routes';
import {StatusBar} from 'react-native';
import { SignIn } from './src/screens/SignIn';
import { AuthContext } from './src/AuthContext';

export default function App() {
  const [fontsLoaded]= useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
      <StatusBar 
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
        <AuthContext>
          <SignIn/>
        </AuthContext>
      </NavigationContainer>
    </ThemeProvider>
  )
}


