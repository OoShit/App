
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  AsyncStorage
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Launch from "./Component/Launch/Launch.js";

export default class hhapp extends Component {

  render() {
    return (
    	<Navigator
        initialRoute={{ title: '启动项', index: 0, component:Launch }}
        configureScene={()=>{
          return Navigator.SceneConfigs.PushFromRight;
        }}
        renderScene={(route, navigator) =>{ //定义哪一个场景出现
          let Component = route.component;
          return <Component {...route.passProps} navigator={navigator}/>
        }}
      />
    );
  }
}


AppRegistry.registerComponent('hhapp', () => hhapp);
