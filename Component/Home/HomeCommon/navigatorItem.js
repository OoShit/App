/*
* @Author: 虚竹
* @Date:   2016-10-31 11:22:20
* @Last Modified by:   虚竹
* @Last Modified time: 2016-11-02 15:00:34
*/


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class NavigatorItem extends Component {
	static defaultProps = {
	  title: ''
	}
  render() {
    return (
      <View style={styles.container}>
        <Text>- {this.props.title} -</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
});
