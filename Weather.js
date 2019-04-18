import React,{Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {LinearGradient} from 'expo';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default class Weather extends Component{
    render(){

        return (
            <LinearGradient color={["fdef3e","fb6b0c"]} style={styles.container} >
                <View style={styles.upper}>
                    <MaterialCommunityIcons
                        color="white"
                        size="20"
                        name="weather-rainy"/>
                    <Text>degree</Text>
                </View>
                <View style={styles.lower}>
                    <Text>title</Text>
                    <Text>subtitle</Text>
                </View >
            </LinearGradient>
        );
    }

}


const styles=StyleSheet.create({
    container:{
        flex: 1
    },
    upper:{
        flex:1
    },
    lower:{
        flex:1
    }

});
