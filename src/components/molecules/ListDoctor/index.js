import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyDoctor2 } from '../../../assets'
import { colors, fonts } from '../../../utils'

const ListDoctor = () => {
    return (
        <View style={styles.container}>
          <Image source={DummyDoctor2} style={styles.Avatar}/>
          <View>
            <Text style={styles.name}>Alexander Jannie</Text>
            <Text style={styles.lastChat}>Baik bu, terimakasih banyak atas wakt...</Text>
          </View>            
        </View>
    )
}

export default ListDoctor

const styles = StyleSheet.create({
  Avatar: {
    width: 46,
    height: 46,
    borderRadius: 46/2,
    marginRight: 12,
  },
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center'
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
  lastChat: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary
  }
})
