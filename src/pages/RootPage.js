import React, { Component } from 'react';
import { StyleSheet, View, Image, StatusBar, Dimensions, Animated } from 'react-native';
import { Router, Scene, Tabs } from 'react-native-router-flux';
import Home from './home/Home';
import Category from './category/Category';
import PersonalCenter from './personalCenter/PersonalCenter';
import Share from './share/Share';
import Store from './store/Store';

const WINDOW_WIDTH = Dimensions.get('window').width;
// Text.defaultProps = { ...(Text.defaultProps || {}), allowFontScaling: false };

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            springValue: new Animated.Value(1),
        };

        this.springAnimated = Animated.spring(
            this.state.springValue,
            { toValue: 1, friction: 2, tension: 10 }
        );
    }

    _startAnimated() {
        this.state.springValue.setValue(0.6);
        this.springAnimated.start();
    }

    render() {
        return (
            <View style={styles.container}>

                <Router
                    backAndroidHandler={() => {
                        return false;
                    }}
                >
                    <Scene key="root">
                        <Tabs
                            lazy={true}
                            activeTintColor="#C31C24"   //选中颜色
                            inactiveTintColor="#666" //未选中颜色
                            tabBarPosition='bottom'  //位置（bottom/top）
                            hideNavBar={true}
                            initial
                        >
                            <Scene
                                key="Home"
                                component={Home}
                                initial
                                title="首页"
                                hideNavBar={true}
                                icon={({ focused, tintColor }) => {
                                    if (focused) {
                                        this._startAnimated()
                                        return (
                                            <Animated.View style={{ transform: [{ scale: this.state.springValue }] }}>
                                                <Image source={require('../../assets/images/bottom-icon/home-active.png')} style={{ width: 25, height: 25 }} />
                                            </Animated.View>
                                        );
                                    } else {
                                        return (
                                            <Image source={require('../../assets/images/bottom-icon/home.png')} style={{ width: 25, height: 25 }} />
                                        );
                                    }
                                }}
                            />
                            <Scene
                                key="Category"
                                component={Category}
                                title="分类"
                                hideNavBar={true}
                                icon={({ focused, tintColor }) => {
                                    if (focused) {
                                        this._startAnimated()
                                        return (
                                            <Animated.View style={{ transform: [{ scale: this.state.springValue }] }}>
                                                <Image source={require('../../assets/images/bottom-icon/category-active.png')} style={{ width: 25, height: 25 }} />
                                            </Animated.View>
                                        );
                                    } else {
                                        return (
                                            <Image source={require('../../assets/images/bottom-icon/category.png')} style={{ width: 25, height: 25 }} />
                                        );
                                    }
                                }}
                            />
                            <Scene
                                key="Share"
                                component={Share}
                                title="分享"
                                hideNavBar={true}
                                icon={({ focused, tintColor }) => {
                                    if (focused) {
                                        this._startAnimated()
                                        return (
                                            <Animated.View style={{ transform: [{ scale: this.state.springValue }] }}>
                                                <Image source={require('../../assets/images/bottom-icon/share-active.png')} style={{ width: 25, height: 25 }} />
                                            </Animated.View>
                                        );
                                    } else {
                                        return (
                                            <Image source={require('../../assets/images/bottom-icon/share.png')} style={{ width: 25, height: 25 }} />
                                        );
                                    }
                                }}
                            />
                            <Scene
                                key="Store"
                                component={Store}
                                title="服务中心"
                                hideNavBar={true}
                                icon={({ focused, tintColor }) => {
                                    if (focused) {
                                        this._startAnimated()
                                        return (
                                            <Animated.View style={{ transform: [{ scale: this.state.springValue }] }}>
                                                <Image source={require('../../assets/images/bottom-icon/service-active.png')} style={{ width: 25, height: 25 }} />
                                            </Animated.View>
                                        );
                                    } else {
                                        return (
                                            <Image source={require('../../assets/images/bottom-icon/service.png')} style={{ width: 25, height: 25 }} />
                                        );
                                    }
                                }}
                            />
                            <Scene
                                key="PersonalCenter"
                                component={PersonalCenter}
                                title="我的"
                                hideNavBar={true}
                                icon={({ focused, tintColor }) => {
                                    if (focused) {
                                        this._startAnimated()
                                        return (
                                            <Animated.View style={{ transform: [{ scale: this.state.springValue }] }}>
                                                <Image source={require('../../assets/images/bottom-icon/person-active.png')} style={{ width: 25, height: 25 }} />
                                            </Animated.View>
                                        );
                                    } else {
                                        return (
                                            <Image source={require('../../assets/images/bottom-icon/person.png')} style={{ width: 25, height: 25 }} />
                                        );
                                    }
                                }}
                            />
                        </Tabs>

                    </Scene>
                </Router>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: WINDOW_WIDTH
    }
});
