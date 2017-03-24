// Import libraries for making a component
import React from 'react';
import { Text, View, Image } from 'react-native';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle, btnStyle } = styles;

  return (
    <View style={viewStyle}>
      <Image style={btnStyle} source={require('../../hw_img/btn_back.png')} />
      <Text style={textStyle}>{props.headerText}</Text>
      <Image style={btnStyle} source={require('../../hw_img/btn_like.png')} />
   
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: 'rgb(100, 65, 165)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 64,
    paddingTop: 25,
    paddingLeft: 8.5,
    paddingRight: 8.5,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // Android Only
    elevation: 2,

  },
  btnStyle: {
    height: 33,
    width: 33,
  },
  textStyle: {
    // bottom: 12,
    fontSize: 18,
    color: 'white',
    paddingBottom: 2, 
  }
};



// Make the component available to other parts of the app
export default Header;
