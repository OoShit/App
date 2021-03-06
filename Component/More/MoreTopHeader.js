/*
* @Author: 虚竹
* @Date:   2016-10-31 11:22:20
* @Last Modified by:   虚竹
* @Last Modified time: 2016-11-01 10:38:22
*/


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

export default class MoreTopHeader extends Component {
	static defaultProps = {
	  title: '',
	  imgUrl: ''
	}

  render() {
    return (
      <View style={styles.container}>
        {/*头部*/}
        <Text style={styles.MiddleTextStyle}>{this.props.title}</Text>
        <TouchableOpacity activeOpacity={0.5} style={styles.rightImage}>
        	<Image style={styles.rightImageStyle} source={{uri:this.props.imgUrl}}></Image>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF6000',
    height: 44,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center'
  },
  MiddleTextStyle: {
  	fontSize: 16,
  	color: 'white',
  	fontWeight: 'bold'
  },
  rightImage: {
  	position:'absolute',
  	right: 10,
  	top: (44-28)/2
  },
  rightImageStyle: {
  	height: 28,
  	width: 28,
  }
});
