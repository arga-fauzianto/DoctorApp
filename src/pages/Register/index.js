import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Header, Input, Button, Gap, Loading } from '../../components'
import { colors, useForm } from '../../utils'
import {Fire} from '../../config'
import { showMessage, hideMessage } from 'react-native-flash-message'
import { color } from 'react-native-reanimated'

const Register = ({navigation}) => {
    // const [fullName, setFullName] = useState('');
    // const [profession, setProfession] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const [form, setForm] = useForm({
        fullName: '',
        profession: '',
        email: '',
        password: ''
    })

    const [loading, setLoading] = useState(false)

    const onContinue = () => {
        console.log(form);
        setLoading(true)
        Fire.auth()
        .createUserWithEmailAndPassword(form.email, form.password)
        .then((userCredential) => {
            // Signed in
            setLoading(false)
            setForm('reset')
            const user = userCredential.user;
            console.log('register succsess:', userCredential);
          })
  .catch(error => {
        setLoading(false)
        const errorMessage = error.message;
        showMessage({
            message: errorMessage,
            type: 'default',
            backgroundColor: colors.error,
            color: colors.white
        })
  });
        // () => navigation.navigate('UploudPhoto')
    }

    return (
        <>
         <View style= {styles.page}>
            <Header onPress= {() => navigation.goBack()} title="Daftar Akun"/>
            <ScrollView showsVerticalScrollIndicator={false}> 
            <View style={styles.content}>
                <Input  
                    label="Full Name"  
                    value={form.fullName} 
                    onChangeText={value => setForm('fullName', value)}
                    />
                <Gap height={24} />
                <Input 
                    label="Pekerjaan"  
                    value={form.profession} 
                    onChangeText={value => setForm('profession' ,value)}
                />
                <Gap height={24} />
                <Input 
                    label="Email" 
                    value={form.email} 
                    onChangeText={value => setForm('email' ,value)}
                />
                <Gap height={24} />
                <Input 
                    label="Password" 
                    value={form.password} 
                    onChangeText={value => setForm('password', value)} 
                    secureTextEntry
                />
                <Gap height={40} />
                <Button title="Continue" onPress={onContinue}/>
            </View>
            </ScrollView>   
         </View>
         {loading && <Loading />} 
        </> 
    )
}

export default Register

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
    },
    content: {
        padding: 40,
        paddingTop: 0
    }
})
