// components/Footer.js
import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { forScaleFromCenterAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';




const Footer = () => {
    const [explode, setExplode] = React.useState(false);

  const testBtn = () => {
    const boom = () => {
        setExplode(!explode);
    };
      const message = explode ? "How could you?!" : "Press again, expolode puppy.";
      console.log(message);
    boom();
  };


  return (
    <View style={styles.footer}>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <TextInput
          style={{
            height: 40,
            width: '80%',
            borderColor: 'gray',
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
          }}
          onChangeText={() => {}}
        />
        <TouchableOpacity style={{marginLeft: 10}} onPress={testBtn}> 
          <MaterialCommunityIcons name="send" size={24} color="#1071e5" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    alignItems: 'center',
    height: 150,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Footer;
