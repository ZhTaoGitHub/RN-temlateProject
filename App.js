import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import RootPage from './src/pages/RootPage';
import _ from "lodash";

Text.defaultProps = Object.assign({}, Text.defaultProps, { allowFontScaling: false })

type Props = {};
export default class App extends Component<Props> {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={styles.container}>
        <RootPage />
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
  }
});
