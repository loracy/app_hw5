// Import libraries for making a component
import React from 'react';
import { Text, View, Image } from 'react-native';

// Make a component
const Menu = () => {
  const { textStyle, fix, menuStyle, viewStyle, iconStyle, textHoverStyle } = styles;

  return (
    <View style={fix}>
    <View style={viewStyle}>
      <View style={menuStyle}>
        <Image style={iconStyle} source={require('../../hw_img/btn_games_selected.png')} />
        <Text style={textHoverStyle}>Games</Text>
      </View>
      <View style={menuStyle}>
        <Image style={iconStyle} source={require('../../hw_img/btn_channels.png')} />
        <Text style={textStyle}>Channels</Text>
      </View>
      <View style={menuStyle}>
        <Image style={iconStyle} source={require('../../hw_img/btn_following.png')} />
        <Text style={textStyle}>Following</Text>
      </View>
      <View style={menuStyle}>
        <Image style={iconStyle} source={require('../../hw_img/btn_me.png')} />
        <Text style={textStyle}>Me</Text>
      </View>
      
    </View>
    </View>
  );
};

const styles = {
  fix: {
    position: 'absolute',
    flex: 1,
    bottom: 0,
  },
  viewStyle: {
    flexDirection: 'row',
    height: 49,
    width: 375,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 2,

  },
  menuStyle: {
    flex: 1,
    alignItems: 'center',
  },
  textStyle: {
    position: 'absolute',
    bottom: 1,
    fontSize: 10,
    color: 'rgb(187, 187, 187)',
  },
  textHoverStyle: {
    position: 'absolute',
    bottom: 1,
    fontSize: 10,
    color: 'rgb(100, 65, 165)',
  },
  iconStyle: {
    width: 94,
    height: 49,
  },
};



// Make the component available to other parts of the app
export default Menu;
