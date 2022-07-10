import React from 'react';
import {View,Text,Image} from 'react-native';
import { Button  } from 'react-native-elements';

export default function AskScreen({navigation}){
    return(
        <View style={{flex:1,backgroundColor:'#f1c40f'}}>
           <View style={{justifyContent:'center',alignItems:'center',}}>

<Image source={require('./assets/Apartmental.png')} style={{height:'50%',width:'50%',borderRadius:20}} resizeMode="contain"/>

<View style={{padding:20,alignItems:'center',justifyContent:'center'}}>
<Text style={{fontWeight:'100',fontFamily:'Signika-Regular',color:'#2d3436',fontSize:30}}><Text style={{color:'#2d3436'}}>Hey</Text> Welcome..</Text>
</View>

<View style={{padding:20,alignItems:'center',justifyContent:'center'}}>
<Text style={{fontWeight:'100',fontFamily:'Signika-Regular',color:'#2d3436',fontSize:25}}>Rent Management Application #1</Text>
</View>
</View>

<View style={{width:'100%',alignItems:'center'}}>
<View style={{width:'80%'}}>
<Button title="Join as Owner" buttonStyle={{height:60,backgroundColor:"#2b2a33",borderTopLeftRadius:30,borderBottomRightRadius:30}} titleStyle={{fontSize:25,color:'white',fontFamily:'Signika-Regular'}} onPress={()=>{navigation.navigate('OtpScreen');}} />
<Text></Text>

<Button title="Join as Rental" buttonStyle={{height:60,backgroundColor:"#2b2a33",borderTopRightRadius:30,borderBottomLeftRadius:30}} titleStyle={{fontSize:25,color:'white',fontFamily:'Signika-Regular'}} onPress={async ()=>{ 
navigation.navigate('loginStatus');
// navigation.navigate('PhoneRegi');
}} /> 

</View>
</View>
        </View>
    );
}
