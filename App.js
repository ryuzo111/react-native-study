import React,{Component} from 'react';
import { SafeAreaView,ScrollView, StatusBar, FlatList, Switch, Image,TextInput, Button, Alert, StyleSheet, Text, View, } from 'react-native';
import { Tile,Header, Icon } from 'react-native-elements';
import { WebView } from 'react-native-webview';

export default class App extends Component {

  items= ['one', 'tow','one', 'tow','one', 'tow','one', 'tow','one', 'tow','one', 'tow','one', 'tow','one', 'tow',];

  constructor(props) {
    super(props);
    this.state = {
      message :'your name:',
      name:'',
      mail:'',
      hello:'',
    };

  }

  componentDidMount() { //render直後に行いたい処理を書くところ
    fetch("https://procir-study.site/yajima427/insurance_sns/matching_insurance/public/api/hello") //api
      .then(res => res.json()) 
      .then(json => {
        console.log(json);
        this.setState({
          hello: json
        });
      });
  }

  render() {
    // var { hello } = this.state;
console.log(this.state.hello);
    return (
      <View style={styles.base}>
        <StatusBar barStyle='dark-content' hidden={true}></StatusBar>
         <Text style={styles.title}>UI</Text>
        {/* <SafeAreaView style={{flex: 1}}> */}
        {/* <WebView source={{uri: "https://www.hoken-talk.net/"}} /> */}
        <Text style={styles.title}> fafa{this.state.hello}</Text>
        {/* </SafeAreaView> */}
         <ScrollView >
          {this.items.map((item,i)=>this.getView(item,i))}
        </ScrollView>
      </View>
    );
  }
  getView = (item, i) => (
      <View style={styles.view}>
        <Text style={{fontSize:36}}>{i}: {item}</Text>
      </View>
    )
  doActionLeft = ()=> {

  }

  onChangeInput = (name) => {
    this.setState({
      name
    });
  }

  // doAction = () => {
  //   this.setState({
  //       message: 'name: [' + this.state.name + ']' 
  //     });
  // }
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
    // padding:30,
    flex:1,
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
