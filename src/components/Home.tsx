import React from "react";
import { View, Text } from "react-native";
import SignInWithOAuth from "./SingInWithOAuth";
import { Image } from "react-native";
import { StyleSheet, Button } from "react-native";

export const Home = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Wakee-icon.png")}
        style={{ width: 100, height: 100 }}
      />
      <Text style={styles.Text}>Start your day encouraged.</Text>
      <SignInWithOAuth />
      <Button title="Chatbox" onPress={() => navigation.navigate("Chatbox")} />
      <Text>or sign with</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#b4e1f1",
  },
  Text: {
    color: "#008a0e",
    fontSize: 20,
    fontWeight: "bold",
  },
});
