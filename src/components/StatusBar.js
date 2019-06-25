import React from 'react'
import { View, StyleSheet, NativeModules, StatusBar as NStatusBar } from 'react-native';
const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = StatusBarManager.HEIGHT;

const barColors = {
  dark: 'dark-content',
  light: 'light-content'
};

const StatusBar = (props) => {
  const {
    style,
    color = 'light'
  } = props;
  return (
    <View style={[styles.statusBar, style]}>
      <NStatusBar translucent={true} barStyle={barColors[color]} />
    </View>
  )
}

export default StatusBar;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});