import * as React from 'react';
import {View,Text } from "react-native";

function Splash({navigation}){

    var timer = setTimeout(()=>{
        console.log("It is working ");
        navigation.navigate('Intro');
    },1000);

    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#34495E'}}>
            <View style={{height:146,width:150,backgroundColor:'#E67E22',borderRadius:41}} />
            <Text style={{marginTop:20,fontSize:20,color:'white'}}>TradeMaa</Text>
        </View>
    );
}
export default Splash;