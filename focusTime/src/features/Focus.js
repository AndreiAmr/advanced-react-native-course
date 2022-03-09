import React, { useState } from 'react';
import { View, Text ,StyleSheet } from 'react-native'
import { colors } from '../utils/colors';
import {TextInput} from 'react-native-paper'
import { RoundedButton  } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';
import { Countdown } from '../components/CountDown';

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null) 
  
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}  label='What would you like to focus on ?' onChangeText={setSubject}/>
        <View style={styles.buttonContainer}>
          <RoundedButton title="+" size={50} onPress={()=> addSubject(subject)}/>
        </View>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {},

  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  
  buttonContainer: { 
      justifyContent: 'center'
  },
  
  textInput: {
    flex: 1,
    marginRight: spacing.sm
  },

  text: {
    color: colors.white
  }
})