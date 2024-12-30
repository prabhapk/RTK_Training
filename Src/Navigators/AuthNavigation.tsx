import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../Screens/LoginScreen';
const Stack = createNativeStackNavigator();


const AuthNavigation = () => {

    return (
        <NavigationContainer>
        <Stack.Navigator>
         
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
        </NavigationContainer>
      );
  };
  
  export default AuthNavigation;