import React,{Component} from 'react';
import { SectionList, FlatList, StatusBar, Switch, Image,TextInput, Button, Alert, StyleSheet, Text, View} from 'react-native';
import { Header } from 'react-native-elements';
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';
import { ButtonGroup } from 'react-native-elements';

export default class App extends Component {

  buttons = [
    {title:'One', element: ()=> <Text style={styles.item}>One</Text>},
    {title:'Two', element: ()=> <Text style={styles.item}>Two</Text>},
    {title:'Three', element: ()=> <Text style={styles.item}>Three</Text>},
  ]
  
  constructor(props) {
    super(props);
    this.state = {
      message :'your name:',
      selectedIndex:0,
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
        <ButtonGroup onPress={this.doAction} selectedIndex={this.state.selectedIndex}
        buttons={this.buttons} containerStyle={{height:75}}>

        </ButtonGroup>

      </View>
    );
  }

  doAction = (selectedIndex) => {
    this.setState({
        message: 'Selected: [' + selectedIndex + ']' + this.buttons[selectedIndex].title,
        selectedIndex: selectedIndex,
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
