import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import MapView, { Marker, Polygon, Polyline } from 'react-native-maps'
import * as Location from 'expo-location';





export default function Drive() {
    const navigation = useNavigation();
   



 
    
   
    return (
        <View style={styles.container}>
         
         <ImageBackground source={require('../assets/footbg.png')} style={{width:'100%', height:300, resizeMode:'contain'}}>
            
            <View style={{ marginTop: '20%', marginHorizontal:'5%' }}>
                <View style={{flexDirection:'row', display:'flex'}}>
               <TouchableOpacity><Icon name="chevron-left" type="entypo" size={30} color="#6BCF87"></Icon></TouchableOpacity>
                </View>
                <Text style={{textAlign:'left', color:"#4BB869",fontSize:25, fontFamily:'B', marginHorizontal:'5%', marginTop:'15%'}}>Map Timeline </Text>
            </View></ImageBackground>   
         
               
              <View style={styles.mapContainer}> 
              
                <MapView
                style={styles.map}
                initialRegion={{
                latitude:37.71848102153304, 
                longitude: -122.17900091737451,
                latitudeDelta: .005,
                longitudeDelta: .005
                }} 
       
               >
       
                
              
                    
            
            </MapView>
            </View>
            <Text style={{fontFamily:'B', color:'#6BCF87', marginHorizontal:'10%', fontSize:15, marginTop:'5%'}}>Based on your driving habits, you’re doing </Text>
            <Text style={{fontFamily:'B', color:'#6BCF87', marginHorizontal:'10%', fontSize:30, textAlign:'center'}}>Better than 85% of people</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: '#FFF'
    },
    header: {
        height: '75%',
        width: '100%',
        marginTop: '5%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    mapContainer: {
        height: '45%',
        width:'100%',
        alignSelf:'center',
        position:'relative',
        backgroundColor:'#F2F3F5',
        alignContent:'center',
        marginTop:'-5%',
        borderRadius:20,
      },
    map: {
        height: '92%',
        borderRadius:100,
        width:'90%',
        margin:'5%',
        alignSelf:'center',
        
      },

});