import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, ChatItem, InputChat } from '../../components'
import { fonts, colors } from '../../utils'

const Chatting = () => {
  return (
    <View style={styles.page}>
      <Header type="dark-profile" title="Nairoby Putri Hayza"/>
      <View style={styles.content}>
        <Text style={styles.ChatDate}>Senin, 21 Maret, 2020</Text>
        <ChatItem isMe />
        <ChatItem />
        <ChatItem isMe />
      </View>
      <InputChat />
    </View>
  )
}

export default Chatting

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  page: {
    backgroundColor: colors.white,
    flex: 1
  },
  ChatDate: {
    fontSize: 11,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center'
  }
})
