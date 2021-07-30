import React, { useState } from 'react'
import { StyleSheet, StatusBar, Text, View } from 'react-native'
import { List } from '../../components'
import { colors, fonts } from '../../utils'
import { DummyDoctor4, DummyDoctor5, DummyDoctor6 } from '../../assets'

const Messages = () => {
  const [doctors] = useState([
    {
      id: 1,
      profile: DummyDoctor4,
      name: 'Alexander Jannie',
      desc: 'Baik bu, terimakasih atas wakt...'
    },
    {
      id: 2,
      profile: DummyDoctor5,
      name: 'Nairoby Putri Hayza',
      desc: 'Baik bu, terimakasih atas wakt...'
    },
    {
      id: 3,
      profile: DummyDoctor6,
      name: 'John Mcparker Stave',
      desc: 'Baik bu, terimakasih atas wakt...'
    }
  ])
    return (
      <>
        <StatusBar barStyle = "dark-content" translucent backgroundColor={colors.white} hidden={false} />
        <View style={styles.page}>
          <View style={styles.content}>
            <Text style={styles.title}>Messages</Text>
            {
              doctors.map(doctor => {
                return (
                <List
                key={doctor.id} 
                profile={doctor.profile} 
                name={doctor.name} 
                desc={doctor.desc}
               />
              )
              })
            }            
          </View>
        </View>
      </>  
    )
}

export default Messages

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16
  }
})
