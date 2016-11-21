/*
* @Author: 虚竹
* @Date:   2016-10-31 11:22:20
* @Last Modified by:   虚竹
* @Last Modified time: 2016-11-02 11:23:47
*/


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

var {width, height} = Dimensions.get('window');

export default class CategoryItem extends Component {
	static defaultProps = {
	  imageUrl: '',
	  title: ''
	}
  render() {
    return (
      <TouchableOpacity>
        <View style={styles.container}>
        	<Image style={styles.imageStyle} source={{uri:this.props.imageUrl}}></Image>
        	<Text>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: width/5,
    height: 100
  },
  imageStyle: {
  	height: 60,
  	width: 60,
  	borderRadius: 30,

  }
});
