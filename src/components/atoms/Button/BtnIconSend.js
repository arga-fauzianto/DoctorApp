import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconSendDark, IconSendLight } from '../../../assets'
import { colors } from '../../../utils'

const BtnIconSend = ({disable}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.container(disable)}>
            {disable && <IconSendDark />}
            {!disable && <IconSendLight />}
        </TouchableOpacity>
    )
}

export default BtnIconSend

const styles = StyleSheet.create({
    container: (disable) => (
        {
            backgroundColor: disable ? colors.disable : colors.tertiary,
            width: 45,
            height: 45,
            borderRadius: 10,
            paddingTop: 3,
            paddingRight: 3,
            paddingBottom: 8,
            paddingLeft: 8
        }
    )
})
