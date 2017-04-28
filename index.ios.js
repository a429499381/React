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
  View
} from 'react-native';

export default class imoocApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          哇 第一次运行
        </Text>
        <Text style={styles.instructions}>
          终于可以了
        </Text>
        <Text style={styles.instructions}>
          挺好用的 {'\n'}
          什么时候更新
        </Text>
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
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#777777',
    marginBottom: 5,
    lineHeight: 22
  },
});

AppRegistry.registerComponent('imoocApp', () => imoocApp);
