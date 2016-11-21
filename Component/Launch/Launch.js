/*
* @Author: 虚竹
* @Date:   2016-10-31 11:22:20
* @Last Modified by:   虚竹
* @Last Modified time: 2016-11-10 20:03:03
*/


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  AsyncStorage
} from 'react-native';

import Main from "../Main/Main.js";
import GuidePager from "../GuidePager/GuidePager.js";

var entryPage = null;

export default class Lauch extends Component {

  componentWillMount() {
    // 获取函数是一个异步操作函数
    const value = AsyncStorage.getItem('@Myapp:entry', (error, result)=> {
      if(result !== null && result === "true") {
        entryPage = Main;
      }else {
        entryPage = GuidePager;
      }

      setTimeout(()=> {
        this.props.navigator.replace({
          component: entryPage
        });
      }, 2000);

    });

    if (value == null){
      setTimeout(()=> {
        this.props.navigator.replace({
          component: GuidePager
        }); 
      }, 2000);
    }
  }

	componentDidMount() {
    // while(1) {
    //   if(entryPage !== null) {
    //     break;
    //   }
    // }

		// setTimeout(()=> {
		// 	this.props.navigator.replace({
	 //      component: entryPage
	 //    });
		// }, 2000);
	}

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Image style={styles.laucheImageStyle} source={{uri:'launchimage'}}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  laucheImageStyle: {
  	flex: 1
  }
});
