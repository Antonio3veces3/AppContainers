import React from 'react';
import {View, ImageBackground, StyleSheet, Text} from 'react-native';

const image = require('../AppContainers/src/assets/images/splash.jpeg');
const App = () => {
  return (
    <View style={styles.Container}>
      <ImageBackground source={image} style={styles.Image} />
      <Text style={styles.Title}>MODAT APPS</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Image: {
    flex: 1,
  },
  Title: {
    position: 'absolute',
    marginTop: 550,
    color: 'white',
    fontSize: 40,
    alignSelf: 'center',
    fontWeight: 'bold',
    letterSpacing: 4,
  },
});
export default App;
