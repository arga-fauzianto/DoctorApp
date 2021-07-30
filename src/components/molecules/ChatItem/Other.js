import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { fonts, colors } from '../../../utils'
import { DummyDoctor9 } from '../../../assets'

const Other = () => {
    return (
        <View style={styles.container}>
            <Image source={DummyDoctor9} style={styles.avatar}/>
            <View>
                <View style={styles.chatContent}>
                <Text style={styles.text}>Ibu dokter, apakah memakan jeruk tiap hari itu buruk?</Text>
                </View>
                <Text style={styles.date}>4.20 AM</Text>
            </View>
        </View>
    )
}

export default Other

const styles = StyleSheet.create({
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        marginRight: 12
    },
    chatContent: {
        padding: 12,
        paddingRight: 18,
        backgroundColor: colors.primary,
        maxWidth: '90%',
        borderBottomLeftRadius: 0,
        borderRadius: 10
    },
    container: {
        alignItems: 'flex-end',
        marginBottom: 20,
        paddingRight: 16,
        paddingLeft: 16,
        flexDirection: 'row'
    },
    text: {
        fontFamily: fonts.primary[400],
        fontSize: 14,
        color: colors.white
    },
    date: {
        fontSize: 11,
        fontFamily: fonts.primary[400],
        marginTop: 8,
        color: colors.text.secondary
    }
})
