import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
<<<<<<< HEAD
import React from 'react';

import { ThemeProvider } from 'styled-components';
import {Dashboard} from './src/screens/Dashboard';
import theme from './src/global/theme';
import AppLoading from 'expo-app-loading';
import {Routes} from './src/routes'
import{
=======

import React from 'react';
import { StatusBar } from 'react-native';
import { SignIn } from './src/screens/SignIn';

import { ThemeProvider } from 'styled-components/native';
import AppLoading from 'expo-app-loading';
import {
>>>>>>> fork/main
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
<<<<<<< HEAD

} from '@expo-google-fonts/poppins'
import DashboardTeste from './src/screens/DashboardTeste';
import { AppRoutes } from './src/routes/App.routes';
import {StatusBar} from 'react-native';
import { SignIn } from './src/screens/SignIn';
import { AuthContext } from './src/AuthContext';
import { AuthProvider, useAuth } from './src/hooks/auth';

export default function App() {
  const [fontsLoaded]= useFonts({
=======
} from '@expo-google-fonts/poppins';

import { Routes } from './src/routes'; 

import theme from './src/global/styles/theme';
import { AuthProvider, useAuth } from './src/hooks/auth';

export default function App() {
  const [fontsLoaded] = useFonts({
>>>>>>> fork/main
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

<<<<<<< HEAD
  const {userStorageLoading} = useAuth()

  if(!fontsLoaded || userStorageLoading){
    return <AppLoading/>
=======
  const { userStorageLoading } = useAuth();

  if(!fontsLoaded || userStorageLoading) {
    return <AppLoading />
>>>>>>> fork/main
  }

  return (
    <ThemeProvider theme={theme}>
<<<<<<< HEAD
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


=======
      <StatusBar  barStyle="light-content" translucent backgroundColor="transparent"/>
        <AuthProvider>
          <Routes />
        </AuthProvider>
    </ThemeProvider>
  );  
}
>>>>>>> fork/main
