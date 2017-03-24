
import React from 'react';
import { AppRegistry, View, StatusBar } from 'react-native';
import Header from './src/components/Header';
import Nav from './src/components/Nav';
import GameList from './src/components/GameList';
import Menu from './src/components/Menu';

const page2 = () => (
      <View style={{ flex: 1, position: 'relative' }}>
        <StatusBar barStyle='light-content' />
        <Header headerText={'Hearthstone'} />
        <Nav />
        <GameList />
        <Menu />
        
      </View>
    );

export default page2;