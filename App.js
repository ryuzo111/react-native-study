import React,{Component} from 'react';
import { Button, Alert, StyleSheet, Text, View} from 'react-native';


export default class App extends Component {

  counter = 0;
  
  constructor(props) {
    super(props);
    this.state = {message :'click me....'};
    this.title = 'Welcome!';
  }

  render() {
    let message = 'Hello World';
    return (
      <View style={styles.base}>
        <Text style={styles.title}>
          {this.title}
        </Text>
        <Text style={styles.subtitle}>
          {this.state.message}
        </Text>
        <Button title='Click' onPress={this.doAction}></Button>
      </View>
    );
  }

  doAction = () => {
    this.setState({message:'count: ' +  ++this.counter});
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
