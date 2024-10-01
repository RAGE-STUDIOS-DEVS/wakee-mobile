import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Chatbox from './components/Chatbox/Chatbox';
import { Home } from './components/Home';
import Header from './components/Chatbox/Header';



const Stack = createStackNavigator();

const AppRootRouter = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen 
        name="Chatbox" 
        component={Chatbox} 
        options={{
          header: () => <Header name="Chatbox" />
          }}/>
          
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRootRouter;


