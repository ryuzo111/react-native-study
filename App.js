import React,{Component} from 'react';
import { TextInput, Button, Alert, StyleSheet, Text, View} from 'react-native';


export default class App extends Component {

  counter = 0;
  
  constructor(props) {
    super(props);
    this.state = {message :'your name:', text:''};
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
        <TextInput style={styles.input} placeholder="write here..." value={this.state.text} onChangeText={this.doType}/>
        <Button title='Click' onPress={this.doAction}></Button>
        <Welcome></Welcome>
        <Welcome></Welcome>

      </View>
    );
  }

  doType = (text) => {
    this.setState({text});
  };

  doAction = () => {
    this.setState({text:'', message:'Hello, ' + this.state.text + '!',});
  }
}

class Welcome extends Component {
  render() {
    return (
      <Text style={styles.message}>こんにちは!</Text>

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
  },
  input: {
    padding:10,
    fontSize:32,
  },

});
