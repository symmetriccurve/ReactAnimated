'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  PanResponder,
  StyleSheet,
  View,
  processColor,
  AppRegistry,
  TouchableHighlight,
  Text,
  Image
} = ReactNative;



var MyTest = React.createClass({

// a view has something called a setNativeProps which can be accessed through the refs of the component.
//for example : ref = {(viewReference)=>{if(viewReference != null){this.ViewRef = viewReference} }}
// get the nativeProps and assign it global variable somthing like this viewref = (ref created from the component)
// now you can handle the style object of the component with out re-rendering the component by passing the style object to the
//setNativeProps(styleObject) i.e setNativeProps({style:{height: 100, width:100}}) .. hooorayyy
   ViewRef : {},
   ViewRef2 : {},
   moveLR : 0,
   moveTB : 0,
   x: 60,
   y : 0,
   view1Right : 0,

  componentWillMount: function() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd
    });


  },

  _handlePanResponderGrant:function(){
    // this.ViewRef.setNativeProps({
    //   style: {
    //     backgroundColor: 'green',
    //   }
    // })
    //

  },

// okay. move around as per usr interaction.
// panResponder has coupple to of methods to call//
// on onPanResponderGrant let the user know the interaction has being made and UI will start Responding
// okay let's go
/*

  First Move

  initial location {0,0} xLocation: 0 , yLocation: 0

  onPanGrant and OnPan Move to Location {10,10}
  MovedxLocation: 10 , MovedyLocation: 10
  set ViewLocation as {xLocation+MovedxLocation ,yLocation+ MovedyLocation}
  and set new locaion as
  xLocation = xLocation+MovedxLocation  //10
  yLocation = yLocation+ MovedyLocation //10


  second Move

  initial location {10,10} xLocation: 10 , yLocation: 10
  onPanGrant and OnPan Move to Location {30,30}

  xLocation = xLocation+MovedxLocation //10 + 20
  xLocation = xLocation+MovedxLocation //10 + 20

  and set new location as
  xLocation = xLocation+MovedxLocation  //30
  yLocation = yLocation+ MovedyLocation //30


  */

  _handlePanResponderMove:function(e: Object, gestureState: Object){
    //console.log("Event", e, "    ", "gestureState",gestureState);
    // console.log("#############MOVE#################");
    // console.log("gestureState.dx",gestureState.dx);
    // console.log('gestureState.dy',gestureState.dy);
    //
    // console.log("this .moveLR", this.moveLR);
    // console.log("this .moveTB", this.moveTB);
    // console.log("Cos theta", 50*Math.cos(this.moveLR+gestureState.dx));
    // console.log("Sin theta", 50*Math.sin(this.moveLR+gestureState.dy));
    //

  //var x = (gestureState.dx > 70 || gestureState.dx < -70) ? '70deg' : gestureState.dx + 'deg'
    //console.log("gestureState.dx",)
    //console.log(this.x + gestureState.dx);
    //this.x = (this.x + gestureState.dx < 70 ) ? (this.x + gestureState.dx + 'deg') : '0deg'
        //console.log("X",this.x)
        //console.log("gestureState.dx + 'deg'",gestureState.dx + 'deg');
        //console.log(typeof(gestureState.dx));
    //this.x = (this.x + gestureState.dx)
    //var view1Angle = this.x/10 + 'deg'
    console.log('view1Angle',view1Angle);

    //Angle must be continious and should not reset to normal, but should add to existing x angle
    this.x = this.x + (gestureState.dx/50)
    var view1Angle = this.x + 'deg'

    this.view1Right = this.view1Right + (gestureState.dx/40)


    this.ViewRef.setNativeProps({
      style: {
        right: this.view1Right,
        transform: [{perspective: 250},{ rotateY: view1Angle }]
      }
    })
    var view2Angle = this.x/50+ 'deg'//this.x/500 + 'deg'
    this.ViewRef2.setNativeProps({
      style: {
        //right:this.x/50,
        transform: [{perspective: 250},{ rotateY: view2Angle }]
      }
    })
  },

  _handlePanResponderEnd(e: Object, gestureState: Object){

    // // console.log("#############END#################");
    // // console.log("gestureState.dx",gestureState.dx);
    // // console.log('gestureState.dy',gestureState.dy);
    //
    // this.moveLR = this.moveLR+gestureState.dx
    // this.moveTB = this.moveTB+gestureState.dy
    // // console.log("this .moveLR", this.moveLR);
    // // console.log("this .moveTB", this.moveTB);
    //
    //
    //
    // this.ViewRef.setNativeProps({
    //   style: {
    //     left: this.moveLR,
    //     top:  this.moveTB
    //   }
    // })

  },

  componentDidMount: function() {

  },

  render: function() {

    return (
    <View style={styles.container} {...this._panResponder.panHandlers}>
      <Image source={{uri: 'https://www.mavericklabel.com/images/products/preprinted-stock/stock-label/color-coded/squares/square-fluorescent-green-4x4-inch-200x200.png'}} resizeMode= 'contain'
      ref = {(viewReference)=>{if(viewReference != null){this.ViewRef = viewReference} }}
          style={{width: 200, height: 200, right: this.view1Right,transform: [{perspective: 250},{ rotateY: this.x + 'deg'}]}} />
          <Image source={{uri: 'https://www.mavericklabel.com/images/products/preprinted-stock/stock-label/color-coded/squares/square-green-2-1-2x2-1-2-inch-200x200.png'}} resizeMode= 'contain'
          ref = {(viewReference2)=>{if(viewReference2 != null){this.ViewRef2 = viewReference2} }}
              style={{width: 200, height: 200,transform: [{perspective: 250},{ rotateY: this.y + 'deg'}]}} />
        {/*<TouchableHighlight onPress= {()=>{this.setStyle()}}>
          <View style={{backgroundColor:'lightblue',height:30, width:100}} >
            <Text style={{backgroundColor:'lightblue',height:30, width:100}}> Click to Change Color</Text>
          </View>
        </TouchableHighlight>*/}
    </View>
    );
  }
});

var styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection:'row',
    //backgroundColor:'coral',
    alignItems:'center',
    justifyContent:'center',
  }
});

module.exports = MyTest


{/*<View style={{flex:1,backgroundColor:'tan'}}>
  <View style ={styles.container} {...this._panResponder.panHandlers}
  ref = {(viewReference)=>{if(viewReference != null){this.ViewRef = viewReference} }}>
    <TouchableHighlight onPress= {()=>{this.setStyle()}}>
      <View style={{backgroundColor:'lightblue',height:30, width:100}} >
        <Text style={{backgroundColor:'lightblue',height:30, width:100}}> Click to Change Color</Text>
      </View>
    </TouchableHighlight>
  </View>
</View> */}
