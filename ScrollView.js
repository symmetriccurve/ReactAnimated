/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';
const CARD_PREVIEW_WIDTH = 20
const CARD_MARGIN = 5;
const width = Dimensions.get('window').width;
const CARD_WIDTH = Dimensions.get('window').width - (CARD_MARGIN + CARD_PREVIEW_WIDTH) * 2;
var selectedIndex = 0;

class RactScroll extends Component {
  componentDidMount() {
  this.selectedIndex = 0;
}

  leftButtonPressed()
  {
    console.log('Left button pressed.. ')
  }
  rightButtonPressed()
  {
    console.log('Right button pressed.. ')
  }
scrollBy(index){
  this.selectedIndex =  this.selectedIndex+1;
  console.log('selectedIndex..: '+this.selectedIndex)

  console.log('scrollBy.. REF: '+this.refs.scrollView)
  // e.nativeEvent.contentOffset = {x: e.nativeEvent.position * this.state.width}
  let children = this.refs.scrollView.props.children
  console.log('scrollBy.. children: '+children)

  let x =  (CARD_WIDTH/3 * this.selectedIndex)
  console.log('X POs.. : '+x)
  let y = 0

this.refs.scrollView.scrollTo({ x, y })
}

contentChange(){
  console.log('scrollBy.. REF: '+this.refs.scrollView)

}
  render() {
    console.log('CARD_WIDTH:: '+CARD_WIDTH)
    return (
      <View style={styles.viewContainer}>
      <View style={{flex:1}}>
      <TouchableOpacity onPress={()=>{this.scrollBy.call(this, 1)}}>
        <View>
          <Text style={styles.buttonText}>›</Text>
        </View>
      </TouchableOpacity>
      {/*{(scrollView)=>{ if(scrollView != null){
        scrollView.contentOffset = {x:1000}
      }}}*/}
          <ScrollView ref="scrollView"
          onContentSizeChange= {()=>{this.contentChange()}}
            style={styles.container}
            automaticallyAdjustInsets={false}
            horizontal={true}
            decelerationRate={0}
            snapToInterval={CARD_WIDTH/2.5}
            snapToAlignment="start"
            contentContainerStyle={styles.content}
            contentContainerStyle={styles.contentContainer}
          >
              <View style={styles.card}>
                    <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                        style={{width: 100, height: 100,transform: [{perspective: 500},{ rotateY: '30deg'}]}} />
              </View>
              <View style={styles.card}>
                    <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                        style={{width: 100, height: 100,transform: [{perspective: 500},{ rotateY: '30deg'}]}} />
              </View>
              <View style={styles.card}>
                    <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                        style={{width: 100, height: 100,transform: [{perspective: 500},{ rotateY: '30deg'}]}} />
              </View>
              <View style={styles.card}>
                    <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                        style={{width: 100, height: 100,transform: [{perspective: 500},{ rotateY: '30deg'}]}} />
              </View>

          </ScrollView>
          <TouchableOpacity onPress={()=>{this.rightButtonPressed();}}>
            <View>
              <Text style={styles.buttonText}>›</Text>
            </View>
          </TouchableOpacity>

          </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  viewContainer:{
    flex: 1,
    width: width
  },
  container: {
    flex: 1,
    // width: width -100,
    backgroundColor: '#F5FCFF',
  },
  content: {
    marginTop: 20,
    paddingHorizontal: CARD_PREVIEW_WIDTH,
    alignItems: 'center',
    flex: 1,
  },
  card: {
    flex: 1,
    // width: CARD_WIDTH/3,
    margin: CARD_MARGIN,
    // height: CARD_WIDTH/3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
  fontSize: 50,
  color: '#007aff',
  fontFamily: 'Arial',
},

  // contentContainer: { paddingVertical: 5 }
});

module.exports = RactScroll
