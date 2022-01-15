import React,{Component} from 'react';
import { SectionList, FlatList, StatusBar, Switch, Image,TextInput, Button, Alert, StyleSheet, Text, View} from 'react-native';
import { Input, Icon } from 'react-native-elements';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message :'your name:',
      name:'',
      mail:'',
    };

  }

  render() {
    return (
      <View style={styles.base}>
        <Text style={styles.title}>UI</Text>
        <Text style={styles.subtitle}>
          {this.state.message}
        </Text>
        <Welcome name="hanako"></Welcome>
        <Image source={require('./image/kart.png')}/>
        <Input label="Name" onChangeText={this.onChangeInput}/>
        <Icon 
        raised
        size={50}
        type='material'
        name='android'
        color='#0000ff'></Icon>
          <Icon
          name='rowing' />
        <Button title='send' onPress={this.doAction}></Button>
      </View>
    );
  }

  onChangeInput = (name) => {
    this.setState({
      name
    });
  }

  doAction = () => {
    this.setState({
        message: 'name: [' + this.state.name + ']' 
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
