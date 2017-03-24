// Import libraries for making a component
import React from 'react';
import { ScrollView, Image, View } from 'react-native';

const GameList = () => {
  const { imgStyle, viewStyle, listStyle } = style;

    return (
      <ScrollView>
          <View style={viewStyle}>
            <View style={listStyle}>
              <Image style={imgStyle} source={require('../../hw_img/img_firebat.png')} />
            </View>
            <View style={listStyle}>
              <Image style={imgStyle} source={require('../../hw_img/img_forsen.png')} />
            </View>
            <View style={listStyle}>
              <Image style={{ width: 365, height: 144 }} source={require('../../hw_img/img_kolento.png')} />
            </View>
          </View>
      </ScrollView>
    );
};

const style = {
  imgStyle: {
    width: 365,
    height: 200,
  },
  viewStyle: {
    alignItems: 'center',
    backgroundColor: 'rgb(241, 241, 241)',
  },
  listStyle: {
    width: 365,
    height: 200,
    marginTop: 5,
  },

};

// Make the component available to other parts of the app
export default GameList;
