import React from 'react';
import { StyleSheet, Text, View , StatusBar } from 'react-native';
import Weather from './Weather';

export default class App extends React.Component {
  state = {
    isLoaded : false
  };
  
  render() {
  
    const isLoaded = this.state;

    return (
        <View style={styles.container}>
        <StatusBar hidden={true} />
            {isLoaded? (
              
                <Weather />
            
            
            
            
                )
            :
              (<View style={styles.uncomplementLoading}>
                <Text style={styles.uncomplementText}>Loading...</Text>
              </View>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  complementLoading:{
    flex:1
  },
  uncomplementLoading:{
    flex:1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    backgroundColor: "yellow"
  },
  complementText:{

  },
  uncomplementText:{
    paddingLeft: 25,
    fontSize : 60,
    marginBottom: 25
  }
});
