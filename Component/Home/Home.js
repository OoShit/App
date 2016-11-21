/*
* @Author: 虚竹
* @Date:   2016-10-31 11:22:20
* @Last Modified by:   虚竹
* @Last Modified time: 2016-11-09 11:59:00
*/


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';

import HomeDetail from "./HomeDetail.js";

// 引入页面
import HomeNav from "./HomeAllView/HomeNav.js";
import HomeCategoryList from "./HomeAllView/HomeCategoryList.js";
import HomeExclusive from "./HomeAllView/HomeExclusive.js";
import HomeShopCenter from "./HomeAllView/HomeShopCenter.js";
import HomeGuestYourLike from "./HomeAllView/HomeGuestYourLike.js";

export default class Home extends Component {
  dealWithUrl = (url)=> {
    return url.replace("imeituan://www.meituan.com/web/?url=", "");
  }

  PushToDetail = (url)=> {
    // 跳转到另外一个页面了
    this.props.navigator.push({
      component: HomeDetail, //要跳转的版块
      passProps: {"url":this.dealWithUrl(url)}
    });
  }

  render() {
    return (
      <View style={styles.container} >
        {/*导航部分*/}
        <HomeNav 
          address={'郑州'}
          placeHolder={'搜索商家'}
        />
        <ScrollView
          style={{flex:1, backgroundColor: '#ddd', elevation:9999}}
        >
        {/*分类列表*/}
        <HomeCategoryList />
        <View>
          <View>
            <Image></Image>
          </View>
          <View>
            <Image></Image>
            <Text></Text>
          </View>
        </View>

        {/*新客专享*/}
        <HomeExclusive />
        {/*购物中心*/}  
        <HomeShopCenter 
          callBackFn={(url)=>this.PushToDetail(url)}
        />
        {/*猜你喜欢*/}
        <HomeGuestYourLike />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ddd'
  }
});
