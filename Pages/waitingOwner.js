import React,{useRef,useState} from 'react';
import { View, Text,Styles,Image } from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import { Button  } from 'react-native-elements';
const axios = require('axios');

function waitingOwner({navigation}) {

    var phoneInput = useRef();

    var [value,setValue] = useState();
    var [formattedValue,setFormattedValue]  = useState();

    setTimeout(()=>{
        navigation.navigate('HomePage');
    },3000);

  return (

    <View style={{ flex: 1,alignItems:'center',justifyContent:'center',backgroundColor:'#2d3436' }}>

<View style={{backgroundColor:'#f1c40f',padding:20,borderRadius:25,elevation:10}}>
             <Image
        style={{
          width: 150,
          height: 150,
          resizeMode: 'contain',
          
          }}
        source={require('./assets/Apartmental.png')}
      />
      </View>

    <View style={{padding:20,alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontWeight:'100',fontFamily:'Signika-Regular',color:'white'}}>Please wait .....</Text>
      <Text style={{fontWeight:'100',fontFamily:'Signika-Regular',color:'white'}}>Creating your Account</Text>
    </View>
                
        </View>
  );
}

export default waitingOwner;