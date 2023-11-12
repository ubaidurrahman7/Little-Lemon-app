import * as React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={WelcomeScreenStyles.main}>
      <Image
        source={require('../assets/images/little-lemon.png')}
        style={WelcomeScreenStyles.logo}
        resizeMode="center"
      />
      <Text style={WelcomeScreenStyles.titleText}>
        Little Lemon, Your Local Meditteranean Bistro
      </Text>
      <Pressable
        onPress={() => {
          navigation.navigate('Subscribe');
        }}
        style={WelcomeScreenStyles.button}>
        <Text style={WelcomeScreenStyles.buttonText}> NewsLetter</Text>
      </Pressable>
    </View>
  );
}

const WelcomeScreenStyles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    marginTop: 70,
    marginLeft: 20,
    height: 200,
    justifyContent: 'center',
    width: 350,
  },
  button: {
    marginTop: 140,
    marginLeft: 25,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor:'#103905',
    color:'#fff',
    width: 350,
    borderColor: '#EDEFEE',
    padding: 8,
  },
  buttonText: {
    textAlign: 'center',
    marginLeft: 12,
    color: '#EDEFEE',
    fontWeight: 'bold',
    fontSize: 18,
  },
  titleText: {
    padding: 40,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
  },
});
