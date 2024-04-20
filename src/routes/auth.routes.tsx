import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
<<<<<<< HEAD
<<<<<<< HEAD
import { SignIn } from '../screens/SignIn';

const {Navigator,Screen} = createStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator
        screenOptions={{
            headerShown: false,
          
          }}>
            <Screen
                name="SignIn"
                component={SignIn}
            />
        </Navigator>
    )
}
=======
=======
>>>>>>> fork/main

import { SignIn } from '../screens/SignIn';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return(
    <Navigator 
      headerMode="none"
    >
      <Screen 
        name="SignIn"
        component={SignIn}
      />
    </Navigator>
  )
<<<<<<< HEAD
}
>>>>>>> fork/main
=======
}
>>>>>>> fork/main
