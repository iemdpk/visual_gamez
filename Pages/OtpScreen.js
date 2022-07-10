import React,{useRef,useState} from 'react';
import { View, Text,Styles,Image } from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import { Button  } from 'react-native-elements';
const axios = require('axios');

function OtpScreen({navigation}) {

    var phoneInput = useRef();

    var [value,setValue] = useState();
    var [formattedValue,setFormattedValue]  = useState();

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
      <Text style={{fontWeight:'100',fontFamily:'Signika-Regular',color:'white'}}>Please enter your number(Owner)</Text>
    </View>
    
<PhoneInput
          
            ref={phoneInput}
            defaultCode="IN"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            // disableArrowIcon={true}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            codeTextStyle={{fontFamily:'Signika-Regular'}}
            textContainerStyle={{fontFamily:'Signika-Regular'}}
            textInputStyle={{fontFamily:'Signika-Regular'}}
            withDarkTheme
            withShadow
            // autoFocus
          />

<Button title="Verify Your Number" buttonStyle={{margin:50,height:60,backgroundColor:"#f1c40f",borderTopLeftRadius:30,borderBottomRightRadius:30}} titleStyle={{fontSize:25,color:'#2d3436',fontFamily:'Signika-Regular',padding:30}} onPress={()=>{navigation.navigate('ConfirmOtp',{"otp":"1234"});}} />
            
        </View>
  );
}

export default OtpScreen;