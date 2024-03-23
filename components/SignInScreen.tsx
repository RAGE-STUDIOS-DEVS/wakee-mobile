import React from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
 
export default function SignInScreen() {
  const { signIn, setActive, isLoaded } = useSignIn();
 
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
 
  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }
 
    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });
      // This is an important step,
      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err: any) {
      console.log(err);
    }
  };
  return (
    <View>
      <View>
        <TextInput
          autoCapitalize="none"
          value={emailAddress}
          placeholder="SignIn Email..."
          onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
          style={styles.inputField}
        />
      </View>
 
      <View>
        <TextInput
          value={password}
          placeholder="Password..."
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          style={styles.inputField}
        />
      </View>
 
      <TouchableOpacity onPress={onSignInPress} style={styles.button}>
        <Text>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
    },
    inputField: {
      marginVertical: 4,
      height: 50,
      borderWidth: 1,
      borderColor: '#6c47ff',
      borderRadius: 4,
      padding: 10,
      backgroundColor: '#fff',
    },
    button: {
      margin: 8,
      alignItems: 'center',
    },
  });