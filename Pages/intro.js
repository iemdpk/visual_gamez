import * as React from 'react';
import {View,Text,Image } from "react-native";
import AppIntroSlider from 'react-native-app-intro-slider';

function Intro({navigation}){

    var timer = setTimeout(()=>{
        console.log("This iss Working on");
    },1000);

    const slides = [
        {
          key: 1,
          title: 'ApartMental_1',
          text: 'Description.\nSay something cool',
          backgroundColor: '#59b2ab',
        },
        {
          key: 2,
          title: 'ApartMental_2',
          text: 'Other cool stuff',
          backgroundColor: '#febe29',
        },
        {
          key: 3,
          title: 'ApartMental_3',
          text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
          backgroundColor: '#22bcb5',
        }
      ];

      const renderNextButton = () => {
        return (
          <View>
            <Text style={{fontSize:25,fontWeight:'bold'}}>Next</Text>
          </View>
        );
      };
      const renderDoneButton = () => {
        return (
          <View>
            <Text style={{fontSize:25,fontWeight:'bold'}}>Done</Text>
          </View>
        );
      };

      const renderItem = ({ item }) => {
        return (
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'#2d3436',fontSize:40}}>{item.title}</Text>
            <Text style={{color:'#2d3436'}}>Content 1</Text>
          </View>
        );
      }
      
    return(
        <View style={{flex:1,backgroundColor:'#f1c40f'}}>
      <AppIntroSlider   dotStyle={{backgroundColor:'#2d3436'}}  renderDoneButton={renderDoneButton} renderNextButton={renderNextButton} renderItem={renderItem} data={slides}  onDone={()=>{ navigation.navigate('AskScreen'); }}/>
        </View>
    );
}
export default Intro;