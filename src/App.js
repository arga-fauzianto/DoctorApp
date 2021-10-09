import React from 'react'
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './navigation';
import { colors } from './utils'
import FlashMessage from "react-native-flash-message"



const App = () => {
  return (
  <> 
  <StatusBar barStyle = "dark-content" translucent={true} backgroundColor={colors.white} hidden={false} /> 
   <NavigationContainer>
     <Router />
   </NavigationContainer>
   <FlashMessage position="top" style={styles.showMessage}/>
  </> 
  )
}

export default App

const styles = StyleSheet.create({
  showMessage: {
    padding: 5,
    marginTop: 15,
    textAlign: 'center'
  },
  titleStyle: {top: 5},
})
