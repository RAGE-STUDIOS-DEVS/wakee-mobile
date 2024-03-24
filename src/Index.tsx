// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme, SafeAreaView, Text, StyleSheet, View, Button } from 'react-native';
import { SignedIn, SignedOut, useAuth } from '@clerk/clerk-expo';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import SignInWithOAuth from './components/SingInWithOAuth';
// import SignInScreen from '../src/components/SignInScreen';
// import SignUpScreen from '../src/components/SignUpScreen';


// export {
//     // Catch any errors thrown by the Layout component.
//     ErrorBoundary,
//   } from 'expo-router';
  
//   export const unstable_settings = {
//     // Ensure that reloading on `/modal` keeps a back button present.
//     initialRouteName: '(tabs)',
//   };
  
  // Prevent the splash screen from auto-hiding before asset loading is complete.
//   SplashScreen.preventAutoHideAsync();
  
//   export default function Index() {
//     const [loaded, error] = useFonts({
//       SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//       ...FontAwesome.font,
//     });
  
//     // Expo Router uses Error Boundaries to catch errors in the navigation tree.
//     useEffect(() => {
//       if (error) console.log(error);
//     }, [error]);
  
//     useEffect(() => {
//       if (loaded) {
//         SplashScreen.hideAsync();
//       }
//     }, [loaded]);
  
//     if (!loaded) {
//       return null;
//     }
  
//     return <Index />;
//   }


function Index() {
    const colorScheme = useColorScheme();
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        },
      });


  return (
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    // <Stack>
     <SafeAreaView style={styles.container}> 

      {/* <SignedIn>
        <Text>You are Signed in</Text>
        <SignOut/>
      </SignedIn> */}

       <SignInWithOAuth />

      {/* <SignedOut> */}
        {/* <SignUpScreen /> */}
        {/* <SignInScreen /> */}
      {/* </SignedOut> */}

     </SafeAreaView> 
    // </Stack>
//   </ThemeProvider> 
  );
}

export default Index;
