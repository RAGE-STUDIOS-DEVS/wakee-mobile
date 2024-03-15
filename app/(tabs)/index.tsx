import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state_mgt/store/store';
import { login, logout } from '../../state_mgt/slices/userSlice';
import { StyleSheet, Button } from 'react-native';
import { Text, View } from '../../components/Themed';
import EditScreenInfo from '../../components/EditScreenInfo';
import SignInWithOAuth from '../../components/SingInWithOAuth';

export default function TabOneScreen() {
  const dispatch = useDispatch();
  const { isAuthenticated, username } = useSelector((state: RootState) => state.user);

  // const handleLogin = () => {
  //   dispatch(login('exampleUser'));
  // };

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <View style={styles.container}>
      <View>
      {isAuthenticated ? (
        <View>
          <Text style={styles.title}>Welcome, {username}!</Text>
          <Button title="Logout" onPress={handleLogout} />
        </View>
      ) : (
        <View>
          <SignInWithOAuth />
        </View>
      )}
    </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
