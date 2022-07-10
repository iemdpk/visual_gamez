import * as React from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from './Pages/intro';
const Stack = createNativeStackNavigator();
import Splash from './Pages/splash';
import OtpNumber from './Pages/OtpNumber';
import ConfirmOtp from './Pages/ConfirmOtp';
import OtpScreen from './Pages/OtpScreen';
import HomePage from './Pages/home';
import Post from './Pages/post';
import Profile from './Pages/Profile';
import AskScreen from './Pages/askScreen';
import waitingOwner from './Pages/waitingOwner';

const forFade = ({ current }) => ({
	cardStyle: {
	  opacity: current.progress,
	},
  });

  function Verification({navigation}){
    React.useEffect(()=>{
      AsyncStorage.getItem('ProfileRegistered').then((valData)=>{

        console.log(valData);
        if(valData == null){
          navigation.replace('Intro');
        }
        else{
          navigation.replace('HomePage');
        }
      });
    });

    return(null);
  }

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Verification' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Intro" options={{animation:'slide_from_right'}}  component={Intro} />
        <Stack.Screen name="Splash" options={{animation:'slide_from_right'}} component={Splash} />
        <Stack.Screen name="OtpNumber" options={{animation:'slide_from_right'}} component={OtpNumber} />
        <Stack.Screen name="ConfirmOtp" options={{animation:'slide_from_right'}} component={ConfirmOtp} />
        <Stack.Screen name="OtpScreen" options={{animation:'slide_from_right'}} component={OtpScreen} />
        <Stack.Screen name="HomePage" options={{animation:"fade"}} component={HomePage} />
        <Stack.Screen name="Post" options={{animation:'fade'}} component={Post} />
        <Stack.Screen name="Profile" options={{animation:'fade'}} component={Profile} />
        <Stack.Screen name="Verification" options={{animation:'slide_from_right'}} component={Verification} />
        <Stack.Screen name="AskScreen" options={{animation:'slide_from_right'}} component={AskScreen} />
        <Stack.Screen name="waitingOwner" options={{animation:"fade"}} component={waitingOwner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;