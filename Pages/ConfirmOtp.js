import React,{useEffect, useRef,useState} from 'react';
import { View, Text,Styles,Image, ScrollView,Keyboard,AsyncStorage, KeyboardAvoidingView } from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import { Button  } from 'react-native-elements';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import url from './Static/Api';

const axios = require('axios');

function ConfirmOtp({navigation,route}) {

    var phoneInput = useRef();

    var [value,setValue] = useState();
    var [formattedValue,setFormattedValue]  = useState();
    const {otp} = route.params;
    const {number} = route.params;

    const [inputType,setInputType] = useState();

    useEffect(()=>{
      console.log(otp);
    },[]);
    
    function CheckOtp(){

      if(inputType == otp){

        fetch(url+"/api/auth/registration?number="+number).then(response => response.json())
        .then(data =>{
          console.log(data);
          AsyncStorage.setItem('ProfileRegistered','yes');
        AsyncStorage.setItem('RegisterNumber',number);
        navigation.navigate('HomePage');
        });

      }
      else{
        alert("You Enter Incorrect Password");  
      }
     
    }

  return (
    
    <View style={{ flex: 1,backgroundColor:'#2d3436' }}>
<ScrollView>
<View style={{height:100}}></View>
  <View style={{justifyContent:'center',alignItems:'center'}}>

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
      <Text style={{fontWeight:'100',fontFamily:'Signika-Regular',color:'white'}}>Please enter your number(Owner)</Text>
    </View>

    <OTPInputView
    style={{width: '80%', height: 50,marginTop:'10%'}}
    pinCount={4}
    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
    // onCodeChanged = {code => { this.setState({code})}}
    autoFocusOnLoad
    codeInputFieldStyle={{width: 50,height: 45,borderWidth:2,borderRadius:5,borderColor:'white',fontWeight:'bold'}}
    odeInputHighlightStyle={{
        borderColor: "#03DAC6",
    }}
    onCodeFilled = {(code => {
      setInputType(code);
    })}
/>

<Button title="Verify Number" buttonStyle={{margin:50,height:60,backgroundColor:"#f1c40f",borderTopLeftRadius:30,borderBottomRightRadius:30}} titleStyle={{fontSize:25,color:'#2d3436',fontFamily:'Signika-Regular',padding:30}} onPress={()=>{ navigation.navigate('waitingOwner'); }} />
</View>
</ScrollView>
        </View>
       
  );
}

export default ConfirmOtp;