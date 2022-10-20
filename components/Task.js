import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Task({ text, index }) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}>
          <Text style={styles.index}>{index + 1}</Text>
        </View>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55bcf6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  index:{
    textAlign: 'center',
  },
  itemText: {
    maxWidth: '80%'
  },
  circular: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: '#55bcf6',
    borderWidth: 2,
    borderRadius: 5,
  },
})