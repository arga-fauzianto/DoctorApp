import React from 'react'
import { StyleSheet, StatusBar, View } from 'react-native'
import { Header, List } from '../../components'
import { DummyDoctor7, DummyDoctor8, DummyDoctor9, DummyDoctor10, DummyDoctor11 } from '../../assets'
import { colors } from '../../utils'

const ChooseDoctor = ({navigation}) => {
    return (
		<>	
			<StatusBar barStyle = "light-content" translucent backgroundColor={colors.secondary} hidden={false} />
    		<View style={styles.page}>
				<Header 
				type="dark" 
				title="Pilih Dokter Anak" 
				onPress={() => navigation.goBack()}
				/>
				<List 
				type="next" 
				profile={DummyDoctor7}
				name="Alexander jannie"
				desc="wanita"
				onPress={() => navigation.navigate('Chatting')} 
				/>
				<List 
				type="next" 
				profile={DummyDoctor8} 
				name="John Mcparker Steve" 
				desc="wanita" 
				/>
				<List 
				type="next" 
				profile={DummyDoctor9} 
				name="Nairoby Putri Hayza" 
				desc="wanita" 
				/>
				<List 
				type="next" 
				profile={DummyDoctor10} 
				name="James Rivillia" 
				desc="wanita" 
				/>
				<List 
				type="next"
				profile={DummyDoctor11}
				name="Liu Yue Tian Park"
				desc="wanita" 
				/>
        	</View>
		</>	
    )
}

export default ChooseDoctor

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    }
})
