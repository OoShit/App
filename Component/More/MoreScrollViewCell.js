/*
* @Author: 虚竹
* @Date:   2016-10-31 11:22:20
* @Last Modified by:   虚竹
* @Last Modified time: 2016-11-01 11:11:22
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Switch
} from 'react-native';

export default class MoreScrollViewCell extends Component {
	state = {
		isOn:'true'
	}

	static defaultProps = {
	  title:'',
	  imgUrl: '',
	  isSwitch: false,
	  rightTitle: ''
	}

	renderSwitchOrImage = ()=> {
		if(this.props.isSwitch) {
			return (
				<View style={styles.cellRightView}>
					<Switch 
			  		value={this.state.isOn == true}
			  		onValueChange={()=>{this.setState({isOn: !this.state.isOn})}} 
			  	/>
			  </View>
			)	
		}else {
			return (
				<View style={styles.cellRightView}>
					<Text style={{marginRight: 8}}>{this.props.rightTitle}</Text>
					<Image style={styles.cellImageStyle} source={{uri:this.props.imgUrl}} />	
				</View>
			)
		}  	
	}

  render() {
    return (
    	<TouchableOpacity onPress={()=>alert("点击")}>
	      <View style={styles.container}>
	      	<Text>{this.props.title}</Text>
	      	{this.renderSwitchOrImage()}
	      </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  	backgroundColor: 'white',
  	flexDirection: 'row',
  	alignItems: 'center',
  	justifyContent: 'space-between',
  	paddingLeft: 10,
  	paddingRight:10,
  	borderBottomWidth:1,
  	borderBottomColor:'#ddd',
  	paddingTop: 15,
  	paddingBottom:15
  },
  cellImageStyle: {
  	height: 26*0.7, 
  	width: 16*0.7
  },
  cellRightView: {
  	flexDirection:'row',
  	alignItems:'center'
  }
});
