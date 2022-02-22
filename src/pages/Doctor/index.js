import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native'
import { 
  HomeProfile, 
  DoctorCategory, 
  RatedDoctor, 
  NewsItem, 
  Gap 
} from '../../components'
import {JSONCategoryDoctor, DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets'
import { fonts, colors, getData, showError } from '../../utils'
import {Fire} from '../../config'


const Doctor = ({navigation}) => {
  const [news, setNews] = useState([])
  useEffect(() => {
    Fire.database().ref('news/').once('value').then(res => {
      console.log('data :', res.val())
      if(res.val()){
        setNews(res.val())
      }
    }).catch(err => {
      showError(err.message)
    })
  }, [])
    return (
      <>
        <ScrollView style={styles.scrollPage} showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View style={styles.wrapperSection}>
              <Gap height={30} />
              <HomeProfile onPress={() => navigation.navigate('UserProfile')}/>
              <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini? </Text>
            </View>
              <View style={styles.wrapperScroll}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={styles.category}>
                    <Gap width={32} />
                    {JSONCategoryDoctor.data.map(item => {
                      return <DoctorCategory key={item.id} category={item.category} onPress={() => navigation.navigate('ChooseDoctor')}/>
                    })}
                    <Gap width={22} />
                  </View>
                </ScrollView>
              </View>
              <View style={styles.wrapperSection}>
                <Text style={styles.sectionLabel}>Top Rated Doctor's</Text>
                <RatedDoctor 
                  name="Alexa" 
                  desc="Petrician" 
                  avatar={DummyDoctor1} 
                  onPress={() => navigation.navigate('DoctorProfile')}
                />
                <RatedDoctor 
                  name="Sunny Frank" 
                  desc="Dubtist" 
                  avatar={DummyDoctor2} 
                  onPress={() => navigation.navigate('DoctorProfile')}
                />
                <RatedDoctor 
                  name="John Max" 
                  desc="Robert" 
                  avatar={DummyDoctor3} 
                  onPress={() => navigation.navigate('DoctorProfile')}
                />
                <Text style={styles.sectionLabel}>Good News</Text>
              </View>
              {news.map(item => {
                return(
                  <NewsItem key={item.id} title={item.title} date={item.date} image={item.image}/>
                )
              })}
            <Gap height={30} />    
          </View>   
        </ScrollView>
      </>  
    )
}

export default Doctor

const styles = StyleSheet.create({
  scrollPage: {
    backgroundColor: colors.secondary,
    flex: 1
  },
  wrapperSection: {
    paddingHorizontal: 16
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209
  },
  category: {
    flexDirection: 'row'
  },
  wrapperScroll: {
    marginHorizontal: -16
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
})
