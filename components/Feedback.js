import React, { useState } from 'react';
import { Text, ScrollView, TextInput, StyleSheet, KeyboardAvoidingView, Platform  } from 'react-native';

export default function Feedback() {
  const [firstName, onChangeFirstName] = useState('');
  const [lastName, onChangeLastName] = useState('');
  const [message, onChangeMessage] = useState('');
  const [phoneNumber, onChangePhoneNumber] = useState('');

  return (
    <KeyboardAvoidingView
   style={styles.container}
   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <ScrollView style={styles.keyboardContainer}>
      <Text style={styles.headerText}>How was your visit to Little Lemon?</Text>
      <Text style={styles.regularText}>
                Little Lemon is a charming neighborhood bistro that serves
        simple food         and classic cocktails in a lively but casual
        environment. We would love         to hear your experience with us!    
         {' '}
      </Text>
      <TextInput
        style={styles.inputBox}
        value={firstName}
        onChangeText={onChangeFirstName}
        placeholder="First Name"
      />
      <TextInput
        style={styles.inputBox}
        value={lastName}
        onChangeText={onChangeLastName}
        placeholder="Last Name"
      />
      <TextInput
        style={styles.inputBox}
        value={phoneNumber}
        onChangeText={onChangePhoneNumber}
        placeholder="Phone Number"
        keyboardType={"phone-pad"}
      />
      <TextInput
        style={styles.inputBox}
        value={message}
        onChangeText={onChangeMessage}
        placeholder="Message"
      />
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
  },
  keyboardContainer:{
    flex: 1
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',
  },
});
