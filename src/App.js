import React from 'react'
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './navigation';
import { colors } from './utils'



const App = () => {
  return (
  <> 
  <StatusBar barStyle = "dark-content" translucent={true} backgroundColor={colors.white} hidden={false} /> 
   <NavigationContainer>
     <Router />
   </NavigationContainer>
  </> 
  )
}

export default App
