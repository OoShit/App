/*
* @Author: 虚竹
* @Date:   2016-10-31 11:22:20
* @Last Modified by:   虚竹
* @Last Modified time: 2016-11-02 14:54:12
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// 引入数据
import HomeTopMiddleLeft from "../../../LocalData/HomeTopMiddleLeft.json";

import NavigatorItem from "../HomeCommon/navigatorItem.js";
import ExclusiveItem from "../HomeCommon/exclusiveItem.js";

var dataList = HomeTopMiddleLeft.dataRight;

export default class HomeExclusive extends Component {

  renderExclusiveItems = ()=> {
    let allItems = [];
    for(let i = 0; i < dataList.length; i++) {
      let item = dataList[i];
      allItems.push(
        <ExclusiveItem
          title={item.title} 
          subTitle= {item.subTitle}
          desTitle= '吃喝省钱攻略'
          imageUrl={item.rightImage}
          key={i}
        />
      )
    }

    return allItems;
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigatorItem 
          title={'新客专享'}
        />
        <View style={styles.exclusiveItemsStyle}>
          {this.renderExclusiveItems()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  exclusiveItemsStyle: {
    flexDirection: 'row'
  }
});
