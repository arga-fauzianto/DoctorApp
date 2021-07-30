import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { fonts, colors } from '../../../utils'
import { DummyUser } from '../../../assets'

const HomeProfile = ({onPress}) => {
    return (
        <TouchableOpacity activeOpacity={0.9} style={styles.container} onPress={onPress}>
          <Image source={DummyUser} style={styles.avatar} />
          <View>
            <Text style={styles.name}>Shayna Melinda</Text>
            <Text style={styles.profession}>Front End Developer</Text>
          </View>
        </TouchableOpacity>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    avatar: {
      width: 46,
      height: 46,
      borderRadius: 46 / 2,
      marginRight: 12,
    },
    name: {
      fontSize: 16,
      fontFamily: fonts.primary[600],
      color: colors.text.primary,
    },
    profession: {
      fontSize: 12,
      fontFamily: fonts.primary[400],
      color: colors.text.secondary
    }
})
