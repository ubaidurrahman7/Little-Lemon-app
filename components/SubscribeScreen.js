import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  Alert,
} from 'react-native';

export default function SubscribeScreen() {
  const [email, onChangeEmail] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../assets/images/little-lemon.png')}
        style={styles.logo}
        resizeMode="center"
      />

      <>
        <Text style={styles.regularText}>
          Subscribe to our newsLetter for our latest delicious recipes!{' '}
        </Text>
        <TextInput
          style={styles.inputBox}
          value={email}
          onChangeText={onChangeEmail}
          placeholder={'email'}
          keyboardType={'email-address'}
        />

        <Pressable
          onPress={() => {
            if (email !== '') {
              Alert.alert('Thanks for Subscribing, Stay tuned!');
            }
          }}
          style={{
            ...styles.button,
            backgroundColor: email !== '' ? '#103905' : '#A5A8A4',
          }}>
          <Text
            style={{
              ...styles.buttonText,
              color: email !== '' ? '#fff' : '#fff', 
            }}>
            Subscribe
          </Text>
        </Pressable>
      </>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    marginTop: 40,
    marginLeft: 20,
    height: 150,
    justifyContent: 'center',
    width: 350,
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#333333',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    borderRadius: 10,
    backgroundColor: '#EDEFEE',
  },
  button: {
    marginTop: 30,
    marginLeft: 25,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#1A470F',
    color: '#fff',
    width: 350,
    borderColor: '#EDEFEE',
    padding: 8,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
});
