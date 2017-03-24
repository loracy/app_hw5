
import React from 'react';
import { AppRegistry, View, StatusBar } from 'react-native';
import Menu from './src/components/Menu';
import SearchBar from './src/components/SearchBar';
import GameCover from './src/components/GameCover';

const page3 = () => (
      <View style={{ flex: 1, position: 'relative' }}>
        <StatusBar barStyle='light-content' />
        <SearchBar />
        <GameCover />
        <Menu />
        
      </View>
    );


export default page3;
