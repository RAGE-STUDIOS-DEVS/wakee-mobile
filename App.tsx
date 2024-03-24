import { StyleSheet } from "react-native";
import { Provider} from 'react-redux';
import store from "./src/state/store/store";
import { ClerkProvider } from '@clerk/clerk-expo';
import * as SecureStore from "expo-secure-store";
import Index from "./src/Index";

export default function App() {
  const CLERK_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
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

  return (
    <Provider store={store}>
      <ClerkProvider publishableKey={CLERK_KEY} tokenCache={tokenCache}>

         <Index />

      </ClerkProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
