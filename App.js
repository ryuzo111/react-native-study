import React,{Component} from 'react';
import { SectionList, FlatList, StatusBar, Switch, Image,TextInput, Button, Alert, StyleSheet, Text, View} from 'react-native';
import { Header } from 'react-native-elements';
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';
// import {CheckBox} from 'react-native-elements';

export default class App extends Component {

  
  sections = [
    {title:'Computer', data:['Windows', 'macOS', 'ChromeOS']},
    {title:'Mobile', data:['Android', 'iOS']},
  ];
  constructor(props) {
    super(props);
    this.state = {
      message :'your name:',
      checkd: true,
    };

  }

  render() {
    return (
      <View style={styles.base}>
        <Text style={styles.subtitle}>
          {this.state.message}
        </Text>
        <Welcome name="hanako"></Welcome>
        <Image source={require('./image/kart.png')}/>
        <CheckBox title='Check' onPress={this.doAction} checkd={this.state.checkd}></CheckBox>

      </View>
    );
  }

  doAction = () => {
    this.setState({
        message: 'CHeck:' + !this.state.checkd,
        checkd: !this.state.checkd,
      });
  }
}


class Welcome extends Component {
  render() {
    return (
      <Text style={styles.message}>こんにちは!{this.props.name}さん</Text>
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
  item: {
    margin:5,
    fontSize:24,
  },

});
