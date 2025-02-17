import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../Screens/LoginScreen';
import SplashScreen from '../Screens/SplashScreen'
import detailsPage from '../Screens/detailsPage'
import { CustomHomeHeader } from '../Screens/CustomHomeHeader';
import PaymentPage from '../Screens/PaymentPage'

const Stack = createNativeStackNavigator();


const AuthNavigation = () => {

    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="detailsPage" component={detailsPage} />
          <Stack.Screen name="CustomHomeHeader" component={CustomHomeHeader} />
          <Stack.Screen name="PaymentPage" component={PaymentPage} />
        </Stack.Navigator>
        </NavigationContainer>
      );
  };
  
  export default AuthNavigation;