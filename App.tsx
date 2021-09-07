import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';

import { ThemeProvider } from 'styled-components';
import {Dashboard} from './src/screens/Dashboard';
import theme from './src/global/theme';
import AppLoading from 'expo-app-loading';
import {Routes} from './src/routes'
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
import { AuthProvider, useAuth } from './src/hooks/auth';

export default function App() {
  const [fontsLoaded]= useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  const {userStorageLoading} = useAuth()

  if(!fontsLoaded || userStorageLoading){
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
        <AuthProvider>
          <Routes/>
        </AuthProvider>
    </ThemeProvider>
  )
}


