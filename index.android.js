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
  TouchableOpacity,
} from 'react-native';
import Raven from 'raven-js';
import ravenReactNativePlugin from 'raven-js/plugins/react-native';

ravenReactNativePlugin(Raven);

export default class sentry extends Component {
  constructor(props) {
    super(props);
    Raven
      .config('https://7ced2008b03d474f9174647f3f4f95cf@sentry.io/122236', { release: '0.0.0' })
      .install();
  }

  crash() {
    const obj = {};
    obj.iets();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <TouchableOpacity style={styles.button} onPress={this.crash}>
          <Text style={styles.buttonText}>Press me to CRASH!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonText: {
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#999999',
    padding: 5,
  }
});

AppRegistry.registerComponent('sentry', () => sentry);
