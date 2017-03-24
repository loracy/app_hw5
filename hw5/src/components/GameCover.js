// Import libraries for making a component
import React from 'react';
import { Image, View } from 'react-native';

const GameCover = () => {
  const { imgStyle, viewStyle, lineStyle } = style;

    return (
          <View style={viewStyle}>
            <View style={lineStyle}>
              <Image style={imgStyle} source={require('../../hw_img/img_leagueoflegends.png')} />
              <Image style={imgStyle} source={require('../../hw_img/img_counterstrike.png')} />
            </View>
            <View style={lineStyle}>
              <Image style={imgStyle} source={require('../../hw_img/img_hearthstone.png')} />
              <Image style={imgStyle} source={require('../../hw_img/img_dota2.png')} />  
            </View>
            <View style={lineStyle}>
              <Image style={imgStyle} source={require('../../hw_img/img_h1z1.png')} />
              <Image style={imgStyle} source={require('../../hw_img/img_destiny.png')} />  
            </View>           
          </View>
      
    );
};

const style = {
  imgStyle: {
    width: 180,
    height: 180,
  },
  viewStyle: {
    alignItems: 'center',
    backgroundColor: 'rgb(241, 241, 241)',
  },
  lineStyle: {
    width: 365,
    height: 180,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

};

// Make the component available to other parts of the app
export default GameCover;
