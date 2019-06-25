import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, NativeModules, StatusBar as NStatusBar, Dimensions } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { Actions } from 'react-native-router-flux';

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = StatusBarManager.HEIGHT;
const WINDOW_WIDTH = Dimensions.get('window').width;
const defaultColor = '#C31C24';
const barColors = {
  dark: 'dark-content',
  light: 'light-content'
};

const AppBar = (props) => {
  const {
    boxStyle,
    leftIcon,
    rightIcon,
    leftIconStyle = {},
    rightIconStyle = {},
    text,
    textStyle,
    onPressLeftIcon = Actions.pop,
    onPressRightIcon = () => { },
    color = 'light'
  } = props;

  return (
    <View style={[styles.bar, boxStyle]}>
      <NStatusBar translucent={true} backgroundColor='#00000000' />
      <View style={styles.appBar}>
        <TouchableOpacity
          style={[styles.leftIconBox]} onPress={onPressLeftIcon}
        >
          {
            (typeof leftIcon === 'function')
              ? leftIcon()
              : <Entypo name="chevron-thin-left" size={18} color="#fefefe" {...leftIconStyle} />
          }
        </TouchableOpacity>
        <View style={styles.appBarTitleBox}>
          <Text style={[styles.appBarTitleText, textStyle]}>{text}</Text>
        </View>
        <TouchableOpacity style={[styles.rightIconBox, rightIconStyle]} onPress={onPressRightIcon}>
          {
            (typeof rightIcon === 'function')
              ? rightIcon()
              : <Text></Text>
          }
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AppBar;

const styles = StyleSheet.create({
  bar: {
    width: WINDOW_WIDTH,
    backgroundColor: defaultColor,
    elevation: 0
  },
  statusBar: {
    // height: STATUSBAR_HEIGHT,
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    marginTop: STATUSBAR_HEIGHT
  },
  leftIconBox: {
    marginLeft: 16
  },
  appBarTitleBox: {
    alignItems: 'center',
    position: 'absolute',
    width: WINDOW_WIDTH,
    flex: 1,
  },
  appBarTitleText: {
    color: '#fefefe',
    fontSize: 18,
    // fontFamily: 'Alibaba-PuHuiTi-Regular'
  },
  rightIconBox: {
    marginRight: 16
  },
});