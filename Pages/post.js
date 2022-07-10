import * as React from 'react';
import {View,Text,TouchableOpacity,Icon,ScrollView } from "react-native";
import { Header } from 'react-native-elements';
import NavBarSheet  from './bottomBar';
import Swiper from 'react-native-swiper';
import { TextInput,Button } from 'react-native-paper';
const axios = require('axios').default;
import Snackbar from 'react-native-snackbar';
import url from './Static/Api';

function Post({navigation}){

    var [productName,setProductName] = React.useState();
    var [productDescription,setProductDesc] = React.useState();
    var [productPrice,setProductPrice] = React.useState();
    var [productCate,setProductCate] = React.useState();

    function OpenPrice(){
        axios.get(url+'/api/auth/sellerRequest?name=N.A&phone=8789033735&email=test&product_img=No%20Img&product_title='+productName+'&product_desc='+productDescription+'&Product_keywords=it_is_productImg&product_price='+productPrice)
          .then(function (response) {
            console.log(response.data);
            Snackbar.show({
                text: 'Query is posted Now',
                duration: Snackbar.LENGTH_LONG,
                  textColor:'white',
                  backgroundColor:'#00a8ff',
                  numberOfLines:3
                });
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return(
        <View style={{flex:1,backgroundColor:'#F26836',borderBottomColor:'white'}}>
            <ScrollView>
       <Header 
        containerStyle={{ borderBottomWidth:0 }}
        placement='left'
        backgroundColor='#F26836'
         centerComponent={{ text: 'Post', style: {color:'black',fontSize:20,color:'black',fontFamily:'Rubik-Medium'} }}
         leftComponent={{icon:'dashboard',color:'black' }}
        />

    <Swiper style={{height:210}} showsButtons={false}>
    <View style={{margin:10,borderRadius:10,height:200,backgroundColor:'pink',elevation:10,alignItems:'center',justifyContent:'center',shadowOffset:{height:100,width:0},shadowColor:'red',shadowOpacity:1}}>
        <Text>Offer Poster-1</Text>
    </View>
    <View style={{margin:10,borderRadius:10,height:200,backgroundColor:'red',elevation:10,alignItems:'center',justifyContent:'center'}}>
    <Text >Offer Poster-2</Text>
    </View>
    <View style={{margin:10,borderRadius:10,height:200,backgroundColor:'purple',elevation:10,alignItems:'center',justifyContent:'center'}}>
    <Text>Offer Poster-3</Text>
    </View>
    </Swiper>

<Text></Text>
<View style={{flex:1}}>

<TextInput
    label="Product Name"
    style={{backgroundColor:'white',elevation:5,margin:20,borderRadius:10}}
    titleStyle={{fontFamily:'Signika-Regular'}}
    theme={{ colors: { primary: 'black'}}}
    selectionColor="black"
    Type="outlined"
    underlineColor="transparent"
    activeOutlineColor="black"
    outlineColor="black"
    onChangeText={(val)=>{setProductName(val)}}
 />

<TextInput
    label="Product Description"
    style={{backgroundColor:'white',elevation:5,margin:20,borderRadius:10}}
    titleStyle={{fontFamily:'Signika-Regular'}}
    theme={{ colors: { primary: 'black'}}}
    selectionColor="black"
    Type="outlined"
    underlineColor="transparent"
    activeOutlineColor="black"
    outlineColor="black"
    onChangeText={(val)=>{setProductDesc(val)}}
  />

<TextInput
    label="Product price"
    style={{backgroundColor:'white',elevation:5,margin:20,borderRadius:10}}
    titleStyle={{fontFamily:'Signika-Regular'}}
    theme={{ colors: { primary: 'black'}}}
    selectionColor="black"
    Type="outlined"
    underlineColor="transparent"
    activeOutlineColor="black"
    outlineColor="black"
    onChangeText={(val)=>{setProductPrice(val)}}
/>

<TextInput
    label="Product Category"
    style={{backgroundColor:'white',elevation:5,margin:20,borderRadius:10}}
    titleStyle={{fontFamily:'Signika-Regular'}}
    theme={{ colors: { primary: 'black'}}}
    selectionColor="black"
    Type="outlined"
    underlineColor="transparent"
    activeOutlineColor="black"
    outlineColor="black"
    onChangeText={(val)=>{setProductCate(val)}}
/>

<Button style={{margin:20,backgroundColor:'#535c68',borderRadius:10}} mode="contained" onPress={OpenPrice}>
        Add Product
  </Button>

</View>

    </ScrollView>

        <NavBarSheet />

        </View>
    );
}
export default Post;