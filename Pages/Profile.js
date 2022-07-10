import React,{useEffect, useRef,useState} from 'react';
import { View, Text,Styles,Image, ScrollView,Keyboard,AsyncStorage,TouchableOpacity,ImageBackground,Model,Linking,Dimensions } from 'react-native';
import { Header as HeaderRNE, HeaderProps,SearchBar,Card } from 'react-native-elements';
const axios = require('axios');
import NavBarSheet  from './bottomBar';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import Snackbar from 'react-native-snackbar';
import {Header} from 'react-native-elements';

function Profile({navigation,route}){

    return(
        <View style={{flex:1,backgroundColor:'#F26836'}}>
          
        <Text></Text>
        <ScrollView>

        <Header 
          backgroundColor='#F26836'
          placement='left'
          containerStyle={{borderBottomWidth:0}}
         centerComponent={{ text: 'Profile', style: {color:'black',fontSize:20,fontFamily:'Rubik-Medium'} }}
         leftComponent={{icon:'dashboard',color:'black' }}
      />

<Text  style={{fontWeight:'bold',fontSize:20,marginLeft:10,color:'white',fontFamily:'Roboto-Regular',margin:20}}>Profile Section</Text>
        {/* This is The Main */}
        <TouchableOpacity style={{margin:10}}>
        <View style={{flexDirection:'row'}}>
        <View style={{backgroundColor:'#535c68',height:60,width:60,alignItems:'center',borderRadius:10,justifyContent:'center',marginLeft:5}}>
        <Icon name="user"   size={20} color='white'/>
        </View>
        <View>
        <Text style={{marginLeft:10,fontSize:20,color:'#535c68',fontFamily:'Signika-Regular'}}>Profile</Text>
        <Text style={{marginLeft:10,fontSize:15,color:'white',fontFamily:'Signika-Regular'}}>Name Email Address Here</Text>
        </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={{margin:10}}>
        <View style={{flexDirection:'row'}}>
        <View style={{backgroundColor:'#535c68',height:60,width:60,alignItems:'center',borderRadius:10,justifyContent:'center',marginLeft:5}}>
        <Icon name="star"   size={20} color='white'/>
        </View>
        <View>
        <Text style={{marginLeft:10,fontSize:20,color:'#535c68',fontFamily:'Signika-Regular'}}>Recharge</Text>
        <Text style={{marginLeft:10,fontSize:15,color:'white',fontFamily:'Signika-Regular'}}>Recharge Payment Gateway</Text>
        </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={{margin:10}}>
        <View style={{flexDirection:'row'}}>
        <View style={{backgroundColor:'#535c68',height:60,width:60,alignItems:'center',borderRadius:10,justifyContent:'center',marginLeft:5}}>
        <Icon name="question-circle"   size={20} color='white'/>
        </View>
        <View>
        <Text style={{marginLeft:10,fontSize:20,color:'#535c68',fontFamily:'Signika-Regular'}}>Overall Leads</Text>
        <Text style={{marginLeft:10,fontSize:15,color:'white',fontFamily:'Signika-Regular'}}>Total Number of Leads Here</Text>
        </View>
        </View>
        </TouchableOpacity>

        <Text  style={{fontWeight:'bold',fontSize:20,marginLeft:10,color:'white',fontFamily:'Roboto-Regular',margin:20}}>Help & About</Text>

        <Card.Divider/>
        {/* This is the FIrst ROw  */}
        <TouchableOpacity style={{margin:10}}>
        <View style={{flexDirection:'row'}}>
        <View style={{backgroundColor:'#535c68',height:60,width:60,alignItems:'center',borderRadius:10,justifyContent:'center',marginLeft:5}}>
        <Icon name="info"   size={20} color='white'/>
        </View>
        <View>
        <Text style={{marginLeft:10,fontSize:20,color:'#535c68',fontFamily:'Signika-Regular'}}>About</Text>
        <Text style={{marginLeft:10,fontSize:15,color:'white',fontFamily:'Signika-Regular'}}>About the Application</Text>
        </View>
        </View>
        </TouchableOpacity>

        {/* This is the Second ROw  */}
        <TouchableOpacity style={{margin:10}}>
        <View style={{flexDirection:'row'}}>
        <View style={{backgroundColor:'#535c68',height:60,width:60,alignItems:'center',borderRadius:10,justifyContent:'center',marginLeft:5}}>
        <Icon name="check"   size={20} color='white'/>
        </View>
        <View>
        <Text style={{marginLeft:10,fontSize:20,color:'#535c68',fontFamily:'Signika-Regular'}}>Send Feedback</Text>
        <Text style={{marginLeft:10,fontSize:15,color:'white',fontFamily:'Signika-Regular'}}>Send your valuable feedback</Text>
        </View>
        </View>
        </TouchableOpacity>

        {/* This is the Third ROw  */}
        <TouchableOpacity style={{margin:10}}>
        <View style={{flexDirection:'row'}}>
        <View style={{backgroundColor:'#535c68',height:60,width:60,alignItems:'center',borderRadius:10,justifyContent:'center',marginLeft:5}}>
        <Icon name="gears"   size={20} color='white'/>
        </View>
        <View>
        <Text style={{marginLeft:10,fontSize:20,color:'#535c68',fontFamily:'Signika-Regular'}}>Terms And Condition</Text>
        <Text style={{marginLeft:10,fontSize:15,color:'white',fontFamily:'Signika-Regular'}}>Terms and condition we work</Text>
        </View>
        </View>
        </TouchableOpacity>
        {/* This is the Fourth ROw  */}
        
        <TouchableOpacity style={{margin:10}}>
        <View style={{flexDirection:'row'}}>
        <View style={{backgroundColor:'#535c68',height:60,width:60,alignItems:'center',borderRadius:10,justifyContent:'center',marginLeft:5}}>
        <Icon name="bookmark"   size={20} color='white'/>
        </View>
        <View>
        <Text style={{marginLeft:10,fontSize:20,color:'#535c68',fontFamily:'Signika-Regular'}}>Privacy & Policy</Text>
        <Text style={{marginLeft:10,fontSize:15,color:'white',fontFamily:'Signika-Regular'}}>Privacy and policy here you get</Text>
        </View>
        </View>
        </TouchableOpacity>

        <Card.Divider />
        {/* This is Icons  */}
        <View style={{alignItems:'center'}}>
        <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>

        <TouchableOpacity  onPress={()=>{  Linking.openURL('');  }}  style={{marginRight:10,backgroundColor:'#535c68',padding:10,borderRadius:10}}>
        <Icon name="facebook-square" size={30} color="#54a0ff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{  Linking.openURL('');  }} style={{backgroundColor:'#535c68',padding:10,borderRadius:10}}>
        <Icon name="instagram" size={30} color="#ff6b6b" />
        </TouchableOpacity>

        </View>

        </View>

        <View style={{marginTop:20,alignItems:'center',justifyContent:'center'}}>
        <Text style={{marginLeft:10,fontSize:20,color:'#34495e',fontFamily:'Signika-Regular'}}>1.0.42</Text>
        </View>

        <Text></Text>
        <Text></Text>
        <Card.Divider />
        <Card.Divider/>
          <Text></Text>

        </ScrollView>

<NavBarSheet />

        </View>
);

}

export default Profile;