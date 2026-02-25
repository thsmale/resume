import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import {
  hpeColorBackgroundPrimaryStrong,
} from './config';
import {
  name,
  title,
} from './data/header';


const styles = StyleSheet.create({
  header: {
    height: 30,
    backgroundColor: hpeColorBackgroundPrimaryStrong,
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  nameTitle: {
    fontSize: 12,
    fontWeight: 900,
    color: 'white',
  },
  title: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: 400,
  },
})

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.nameTitle}>{name}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}