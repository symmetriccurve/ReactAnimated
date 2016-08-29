'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  PanResponder,
  StyleSheet,
  View,
  processColor,
  AppRegistry
} = ReactNative;


var Test = require('./Test')
var MyTest = require('./MyTest')
var CircularSlider = require('./CircularSlider')
var ScrollView = require('./ScrollView')

var ReAnt = React.createClass({
  render: function() {
    console.log("This state", this);
    return (
        <MyTest/>
    );
  }
});


AppRegistry.registerComponent('ReAnt', () => ReAnt);
