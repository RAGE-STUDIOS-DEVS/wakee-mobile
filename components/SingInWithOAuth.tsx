import React, { useState } from "react";
import * as WebBrowser from "expo-web-browser";
import { Button, View } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../state_mgt/slices/userSlice";

 
WebBrowser.maybeCompleteAuthSession();
 
const SignInWithOAuth = () => {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();

  const dispatch = useDispatch();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    
    dispatch(login('exampleUser'));
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId && setActive) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
        console.error("setActive is undefined")
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
   
  }, []);



  return (
    
    <Button 
      title="Sign in with Google"
      onPress={onPress}
    />
    
    

  );
}
export default SignInWithOAuth;