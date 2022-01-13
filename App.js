import React,{Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';


export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.title = 'Welcome!';
    this.message = 'this is sample message!';
  }

  render() {
    let message = 'Hello World';
    return (
      <View style={styles.base}>
        <Text style={styles.title}>
          {this.title}
        </Text>
        <Text style={styles.subtitle}>
          {this.message}
        </Text>
        <Text style={styles.message}>
          This is sample message.
          これは、サンプルメッセージです。
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({ 
  base: {
    padding:30
  },
  title: {
    padding: 10,
    color: 'red',
    textAlign:'center',
    fontSize:60,
    fontWeight:'bold'
  },
  subtitle: {
    padding:10,
    color:'blue',
    fontSize:20,
    fontWeight:'bold'
  },
  message: {
    padding:10,
    color:'green',
    fontSize:26,
    lineHeight:50
  }

});
