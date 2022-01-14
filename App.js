import React,{Component} from 'react';
import { FlatList, StatusBar, Switch, Image,TextInput, Button, Alert, StyleSheet, Text, View} from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends Component {

  
  items = [
    {name:'Taro', age: 30, mail:'taro@yamada'},
    {name:'Taro', age: 30, mail:'taro@yamada'},
    {name:'Taro', age: 30, mail:'taro@yamada'},
    {name:'Taro', age: 30, mail:'taro@yamada'},
    {name:'Taro', age: 30, mail:'taro@yamada'},
  ]
  constructor(props) {
    super(props);
    StatusBar.setBarStyle('dark-content', true);
    StatusBar.setBackgroundColor('#008080', true);
    this.state = {
      message :'your name:',
      text:'',
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
        <FlatList data={this.items} renderItem={this.getItem}></FlatList>
        <Text>{this.items[0].selected}</Text>

      </View>
    );
  }

  getItem = ({item}) => {
    return (
    <View style={styles.item}>
      <Text style={styles.itemTitle} onPress={()=>this.doAction(item)} >{item.name} ({item.age})</Text>
      <Text>{item.mail}</Text>
    </View>
    );
  }

  doAction = (item) => {
    this.setState({
      selected: item.id *1,
      message: 'select: ' + item.name.toString() + '(' + item.age.toString() + ')',
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
