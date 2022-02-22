import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyNews1 } from '../../../assets'
import { fonts, colors } from '../../../utils'

const NewsItem = ({title, date, image}) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <Image source={{uri: image}} style={styles.image}/>
        </View>
    )
}

export default NewsItem

const styles = StyleSheet.create({
    title: {
        fontFamily: fonts.primary[600],
        fontSize: 16,
        color: colors.text.primary,
        maxWidth: '90%'
    },
    date: {
        fontFamily: fonts.primary[400],
        fontSize: 12,
        color: colors.text.secondary,
        marginTop: 4,
    },
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        paddingBottom: 12,
        paddingTop: 16,
        paddingHorizontal: 16
    },
    image: {
        width: 80,
        height: 60,
        borderRadius: 11,
    },
    titleWrapper: {
        flex: 1
    }
})
