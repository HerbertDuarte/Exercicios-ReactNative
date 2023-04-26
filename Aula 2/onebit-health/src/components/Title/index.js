import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function Title (){
  return (
    <View>
      <Text style={styles.title}>ONEBITHEALTH</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color : 'red',
    fontFamily: '',
    fontWeight : 'bold',
    fontSize :35,
    marginBottom: 50
  },
});