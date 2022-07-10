import React,{useState,useRef} from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header,Icon } from 'react-native-elements';

export default function NavBarSheet() {
  const navigation = useNavigation();

return (
  
  <View style={{height:60,flexDirection:'row',width:'95%',backgroundColor:'#f1c40f',justifyContent:'space-around',alignItems:'center',margin:10,borderRadius:10}}>
    <TouchableOpacity onPress={()=>{navigation.navigate('HomePage');}}>
    <Icon name="home" size={20} color={"#2d3436"} />
    <Text style={{fontFamily:'OpenSans-Medium',color:'#2d3436'}}>Home</Text>
    </TouchableOpacity>
  <TouchableOpacity>
  <Icon name="message" size={20} color={"#2d3436"} />
  <Text style={{fontFamily:'OpenSans-Medium',color:'#2d3436'}}>Chats</Text>
  </TouchableOpacity>   
  <TouchableOpacity onPress={()=>{ navigation.navigate('Post')}}>
  <Icon name="add-business" size={20}  color={"#2d3436"}/>
  <Text style={{fontFamily:'OpenSans-Medium',color:'#2d3436'}}>Flats  </Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>{ navigation.navigate('Profile')}}>
  <Icon name="person" size={20}  color={"#2d3436"}/>
  <Text style={{fontFamily:'OpenSans-Medium',color:'#2d3436'}}>Profile</Text>
  </TouchableOpacity>
</View>
    );
}
