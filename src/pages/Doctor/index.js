import React from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import { HomeProfile, DoctorCategory, RatedDoctor, NewsItem, Gap } from '../../components'
import { fonts, colors } from '../../utils'

const Doctor = () => {
    return (
        <ScrollView style={styles.scrollPage} showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View style={styles.wrapperSection}>
              <Gap height={30} />
              <HomeProfile />
              <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini? </Text>
            </View>
              <View style={styles.wrapperScroll}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={styles.category}>
                    <Gap width={32} />
                    <DoctorCategory />
                    <DoctorCategory />
                    <DoctorCategory />
                    <DoctorCategory />
                    <Gap width={22} />
                  </View>
                </ScrollView>
              </View>
              <View style={styles.wrapperSection}>
                <Text style={styles.sectionLabel}>Top Rated Doctor's</Text>
                <RatedDoctor />
                <RatedDoctor />
                <RatedDoctor />
                <Text style={styles.sectionLabel}>Good News</Text>
              </View>
              <NewsItem />
              <NewsItem />
              <NewsItem />
            <Gap height={30} />    
          </View>   
        </ScrollView>
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
