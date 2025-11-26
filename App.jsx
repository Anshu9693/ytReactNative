import { StyleSheet, Text, View } from 'react-native'

import React from 'react' 
import HomeScreen from './src/Screens/HomeScreen'
const App = () => {
  return (
    <View style={{flex:1 ,paddingTop:40,backgroundColor:"#0f0f0f"}}>
      <HomeScreen />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})