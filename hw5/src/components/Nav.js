// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Nav = () => {
  const { textStyle, viewStyle, navStyle, navHoverStyle, textHoverStyle } = styles;

  return (
    <View style={viewStyle}>
      <View style={[navStyle, navHoverStyle]}>
  <Text style={[textHoverStyle]}>LIVE</Text>
      </View>
      <View style={navStyle}>
        <Text style={textStyle}>RECENT</Text>  
      </View>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: 'rgb(255, 255, 255)',
    flexDirection: 'row',
    height: 44,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 2,

  },
  textStyle: {
    fontSize: 13,
    color: 'rgb(187, 187, 187)',
    textAlign: 'center',
  },
  navStyle: {
    flex: 1,
    paddingTop: 14,
    paddingBottom: 14,    
    backgroundColor: 'rgb(255, 255, 255)',
  },
  textHoverStyle: {
    fontSize: 13,
    color: 'rgb(100, 65, 165)',
    textAlign: 'center',
  },
  navHoverStyle: {
    borderBottomWidth: 5,
    borderBottomColor: 'rgb(100, 65, 165)',
  }
};



// Make the component available to other parts of the app
export default Nav;
