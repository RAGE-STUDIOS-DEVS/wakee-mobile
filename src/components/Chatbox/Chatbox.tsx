import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from './Footer';

const Chatbox = () => {


  return (
    <View style={styles.container}>
      <Text>Chatbox</Text>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b4e1f1',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Chatbox;
