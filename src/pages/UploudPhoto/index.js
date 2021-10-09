import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native'
import { Header, Button, Link, Gap } from '../../components'
import { ILNullPhoto, IconAddPhoto, IconRemovePhoto } from '../../assets'
import { colors, fonts } from '../../utils'
import * as ImagePicker from "react-native-image-picker"
import {showMessage} from 'react-native-flash-message'



const UploudPhoto = ({navigation}) => {
    const [hasPhoto, setHasPhoto] = useState(false)
    const [photo, setPhoto] = useState(ILNullPhoto)
    const getImage = () => {
        ImagePicker.launchImageLibrary({}, response => {
            console.log('response: ', response)
            if(response.didCancel || response.error) {
                showMessage({
                    message: 'oops, anda tidak memilih photo',
                    type: 'default',
                    backgroundColor: colors.error,
                    color: colors.white,
                    // hideStatusBar: true
                    
                })
            }else{
                const source = {uri: response.uri, includeBase64: true}
                setPhoto(source)
                setHasPhoto(true)
            }
            
        })
        
    }
    return (
        <View style={styles.page}>
            <Header title="Uploud Photo" />
            <View style={styles.content}>
                <View style={styles.profile}>
                    <TouchableOpacity style={styles.AvatarWrapper} onPress={getImage}>
                        <Image source={photo} style={styles.avatar}/>
                        {hasPhoto && <IconRemovePhoto style={styles.addPhoto}/>}
                        {!hasPhoto && <IconAddPhoto style={styles.addPhoto}/>}
                    </TouchableOpacity>
                    <Text style={styles.name}>Shayna Melinda</Text>
                    <Text style={styles.profession}>Product Designer</Text>
                </View>
                <View>
                    <Button disable={!hasPhoto} title="Uploud and Continue" onPress={() => navigation.replace('MainApp')}/>
                    <Gap height={30} />
                    <Link title="Skip for this" align="center" size={16} onPress={() => navigation.replace('MainApp')}/>
                </View>
            </View>
        </View>
    )
}

export default UploudPhoto

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white,
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2
    },
    AvatarWrapper: {
        width: 110,
        height:110,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 110 / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addPhoto: {
        position: 'absolute',
        bottom: 3,
        right: 3
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign: 'center'
    },
    profession: {
        fontSize: 18,
        fontFamily: fonts.primary[400],
        textAlign: 'center',
        color: colors.text.secondary,
        marginTop: 4
    },
    content: {
        paddingHorizontal: 40,
        paddingBottom: 64,
        justifyContent: 'space-between',
        flex: 1
    },
    profile: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
})
