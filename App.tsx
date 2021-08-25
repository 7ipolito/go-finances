import React from 'react';
import { ThemeProvider } from 'styled-components';
import Dashboard from './src/Dashboard';
import theme from './src/global/theme';
import AppLoading from 'expo-app-loading';
import{
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold

} from '@expo-google-fonts/poppins'
import DashboardTeste from './src/DashboardTeste';
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
      <DashboardTeste/>
    </ThemeProvider>
  )
}


