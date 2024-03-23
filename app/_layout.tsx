import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme, SafeAreaView, Text, StyleSheet, View, Button } from 'react-native';
import { Provider} from 'react-redux';
import store from '../state_mgt/store/store';
import { ClerkProvider, SignedIn, SignedOut, useAuth } from '@clerk/clerk-expo';
import SignInWithOAuth from '../components/SingInWithOAuth';
import * as SecureStore from "expo-secure-store";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import SignUpScreen from "../components/SignUpScreen";
import SignInScreen from "../components/SignInScreen";



export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) console.log(error);
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const CLERK_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

  const tokenCache = {
    async getToken(key: string) {
      try {
        return SecureStore.getItemAsync(key);
      } catch (err) {
        return null;
      }
    },
    async saveToken(key: string, value: string) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch (err) {
        return;
      }
    },
  };

  const SignOut = () => {
    const { isLoaded,signOut } = useAuth();
    if (!isLoaded) {
      return null;
    }
    return (
      <View>
        <Button
          title="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });


  return (
    <Provider store={store}>
      <ClerkProvider 
      publishableKey={CLERK_KEY}
      tokenCache={tokenCache}
      >
   <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
       <SafeAreaView style={styles.container}>

        <SignedIn>
          <Text>You are Signed in</Text>
          <SignOut/>
        </SignedIn>


        <SignedOut>
          <SignInWithOAuth />
          <SignUpScreen />
          <SignInScreen />
        </SignedOut>

      </SafeAreaView>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </ThemeProvider> 

      </ClerkProvider>

    </Provider>
  );
}



