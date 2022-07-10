import React,{useEffect,useState,useRef} from 'react';
import {View,Text,TouchableOpacity,Icon,ScrollView,useColorScheme,Linking } from "react-native";
import { Header,Button } from 'react-native-elements';
import NavBarSheet  from './bottomBar';
import axios from 'axios';
import Swiper from 'react-native-swiper';
import url from './Static/Api';

function HomePage({navigation}){

    var colorScheme = useColorScheme();

    var [productdata,setProductData] = useState([]);

    useEffect(()=>{
        
        fetch(url+'/api/fetch/showData').then(res =>res.json()).then((val)=>{
            console.log(val);
            setProductData(val);
        }).catch((err)=>console.log(err))
    
    },[]);

    var refRBSheet2 = useRef();

    return(
        <View style={{flex:1,backgroundColor:'#2d3436',borderBottomColor:'white'}}>
        <ScrollView>

        <Header 
        containerStyle={{ borderBottomWidth:0 }}
        placement='left'
        backgroundColor='#2d3436'
        centerComponent={{ text: 'Hi Titra', style: {color:'white',fontSize:20,fontFamily:'OpenSans-Medium'} }}
        leftComponent={{icon:'dashboard',color:'white' }}
        />
        <View style={{flexDirection:'row',marginTop:20}}>

        <View style={{width:'50%'}}>
            
        <View style={{margin:20,width:'95%',borderRadius:20,height:250}}>
        <Swiper style={{height:250}} dotStyle={{height:0}} activeDotStyle={{height:0}} showsButtons={false} showsPagination={true}>
        <View style={{margin:10,borderRadius:10,height:230,backgroundColor:'pink',elevation:10,alignItems:'center',justifyContent:'center',shadowOffset:{height:100,width:0},shadowColor:'red',shadowOpacity:1}}>
        <Text>Offer Poster-1</Text>
    </View>
    <View style={{margin:10,borderRadius:10,height:230,backgroundColor:'red',elevation:10,alignItems:'center',justifyContent:'center'}}>
    <Text >Offer Poster-2</Text>
    </View>
    <View style={{margin:10,borderRadius:10,height:230,backgroundColor:'purple',elevation:10,alignItems:'center',justifyContent:'center'}}>
    <Text>Offer Poster-3</Text>
    </View>
    </Swiper>
        </View>

        </View>

        <View style={{width:'50%'}}>
            <View style={{margin:20,borderRadius:20,height:100}}>
        <Swiper style={{height:100}} dotStyle={{height:0}} activeDotStyle={{height:0}} showsButtons={false} showsPagination={true}>
        <View style={{margin:10,borderRadius:10,height:90,backgroundColor:'pink',elevation:10,alignItems:'center',justifyContent:'center',shadowOffset:{height:100,width:0},shadowColor:'red',shadowOpacity:1}}>
        <Text>Offer Poster-1</Text>
    </View>
    <View style={{margin:10,borderRadius:10,height:90,backgroundColor:'red',elevation:10,alignItems:'center',justifyContent:'center'}}>
    <Text >Offer Poster-2</Text>
    </View>
    <View style={{margin:10,borderRadius:10,height:90,backgroundColor:'purple',elevation:10,alignItems:'center',justifyContent:'center'}}>
    <Text>Offer Poster-3</Text>
    </View>
    </Swiper>
        </View>
        <View style={{margin:20,borderRadius:20,height:100}}>
        <Swiper style={{height:100}} dotStyle={{height:0}} activeDotStyle={{height:0}} showsButtons={false} showsPagination={true}>
        <View style={{margin:10,borderRadius:10,height:90,backgroundColor:'pink',elevation:10,alignItems:'center',justifyContent:'center',shadowOffset:{height:100,width:0},shadowColor:'red',shadowOpacity:1}}>
        <Text>Offer Poster-1</Text>
    </View>
    <View style={{margin:10,borderRadius:10,height:90,backgroundColor:'red',elevation:10,alignItems:'center',justifyContent:'center'}}>
    <Text >Offer Poster-2</Text>
    </View>
    <View style={{margin:10,borderRadius:10,height:90,backgroundColor:'purple',elevation:10,alignItems:'center',justifyContent:'center'}}>
    <Text>Offer Poster-3</Text>
    </View>
    </Swiper>
        </View>
        </View> 
        </View>

        <View>
            <Text style={{color:'white',margin:20,fontSize:20,fontFamily:'OpenSans-Medium'}}>Recomended Products</Text>
        </View>

       <View style={{flexDirection:'row',marginTop:20,flexWrap:'wrap'}}>

        {productdata.map((val,index)=><View style={{width:'50%',marginTop:20}}>
        <View style={{width:'95%',borderRadius:20,height:200,backgroundColor:'#D9D9D9',alignItems:'center',justifyContent:'center'}}>
            <Text>{val.product_title}</Text>
        </View>
        <View style={{flexDirection:'row',}}>

            <Button onPress={ async ()=>{ Linking.openURL("tel:"+ val.phone) }} title={"Call Now"} titleStyle={{fontSize:15,fontFamily:'OpenSans-Medium'}} buttonStyle={{margin:5,borderRadius:8,backgroundColor:'#535c68'}} />
            <Button title={"Get Quote"} titleStyle={{fontSize:15,fontFamily:'OpenSans-Medium'}} buttonStyle={{margin:5,borderRadius:8,backgroundColor:'#00a8ff'}} />
            
        </View>
        </View>)}

        {/* <View style={{width:'50%',marginTop:20}}>
        <View style={{width:'95%',borderRadius:20,height:200,backgroundColor:'#D9D9D9'}} />
        </View>

        <View style={{width:'50%',marginTop:20}}>
        <View style={{width:'95%',borderRadius:20,height:200,backgroundColor:'#D9D9D9'}} />
        </View>

        <View style={{width:'50%',marginTop:20}}>
        <View style={{width:'95%',borderRadius:20,height:200,backgroundColor:'#D9D9D9'}} />
        </View>

        <View style={{width:'50%',marginTop:20}}>
        <View style={{width:'95%',borderRadius:20,height:200,backgroundColor:'#D9D9D9'}} />
        </View>

        <View style={{width:'50%',marginTop:20}}>
        <View style={{width:'95%',borderRadius:20,height:200,backgroundColor:'#D9D9D9'}} />
        </View>

        <View style={{width:'50%',marginTop:20}}>
        <View style={{width:'95%',borderRadius:20,height:200,backgroundColor:'#D9D9D9'}} />
        </View> */}

        </View>
        </ScrollView>

        <NavBarSheet />

        </View>
    );
}
export default HomePage;