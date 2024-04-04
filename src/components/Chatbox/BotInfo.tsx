import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface BotInfoProps {
  name: string;
  description: string;
}

const BotInfo = ({ name, description }: BotInfoProps) => { // ({ name, description }) => {
  return (
    <View style={styles.container}>


       {/* <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: 'lightgray' }} />
        <Text style={{ marginLeft: 10 }}>Header</Text> */}
      
      
        <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: 'lightgray', alignSelf: 'center' }} />
        <Text style={{ marginLeft: 10, alignSelf: 'center' }}>Bot name.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});

export default BotInfo;