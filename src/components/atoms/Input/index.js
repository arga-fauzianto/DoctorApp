import React from 'react'
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from 'react-native'
import { colors, fonts } from '../../../utils'

const Input = ({label}) => {
    return (
        <View>
            <KeyboardAvoidingView>
                <Text style={styles.label}>{label}</Text>
                <TextInput style={styles.input}/>
            </KeyboardAvoidingView>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 10,
        padding: 12,
    },
    label: {
        fontSize: 16,
        color: colors.text.seccondary,
        marginBottom: 6,
        fontFamily: fonts.primary[400],
    }
})
