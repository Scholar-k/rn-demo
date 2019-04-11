import React from 'react';
import { Image, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './view/home/View';
import Treasure from './view/treasure/View';
import Praise from './view/praise/View';
import Friend from './view/friend/View';
import Mine from './view/mine/View';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }

  render() {
    const homeIcon = require('./resource/imgs/home.png')
    const treasureIcon = require('./resource/imgs/treasure.png')
    const praiseIcon = require('./resource/imgs/praise.png')
    const friendIcon = require('./resource/imgs/friend.png')
    const mineIcon = require('./resource/imgs/mine.png')
    return (
      <TabNavigator tabBarStyle={styles.tabBarPd}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="home"
          renderIcon={() => <Image source={homeIcon} />}
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <Home />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'treasure'}
          title="treasure"
          renderIcon={() => <Image source={treasureIcon} />}
          onPress={() => this.setState({ selectedTab: 'treasure' })}>
          <Treasure />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'praise'}
          title="praise"
          renderIcon={() => <Image source={praiseIcon} />}
          onPress={() => this.setState({ selectedTab: 'praise' })}>
          <Praise />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'friend'}
          title="friend"
          renderIcon={() => <Image source={friendIcon} />}
          onPress={() => this.setState({ selectedTab: 'friend' })}>
          <Friend />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'mine'}
          title="mine"
          renderIcon={() => <Image source={mineIcon} />}
          onPress={() => this.setState({ selectedTab: 'mine' })}>
          <Mine />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  tabBarPd: {
    height: 62,
    paddingBottom: 6,
  },
});
