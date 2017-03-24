// Import libraries for making a component
import React from 'react';
import { Image, View, Text } from 'react-native';

const SearchBar = () => {
  const { viewStyle, castStyle, searchStyle, searchImg, searchText } = style;

    return (
          <View style={viewStyle}>
            <View style={searchStyle}>
              <Image style={searchImg}source={require('../../hw_img/icon_search.png')} />
              <Text style={searchText}>Search</Text>
            </View> 
            <View>
              <Image style={castStyle} source={require('../../hw_img/btn_cast.png')} />
            </View>
          </View>
    );
};

const style = {
  castStyle: {
    width: 33,
    height: 33,
    marginLeft: 5,
  },
  viewStyle: {
    flexDirection: 'row',
    paddingTop: 26.5,
    height: 64,
    backgroundColor: 'rgb(100, 65, 165)',
  },
  searchStyle: {
    backgroundColor: 'rgb(49, 31, 83)',
    width: 320,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 8.5,
    borderRadius: 5,
    paddingLeft: 8.5,
  },
  searchImg: {
    width: 18,
    height: 18,
  },
  searchText: {
    fontSize: 15,
    color: 'rgb(185, 163, 227)',
    paddingLeft: 5.5,
  },
};

// Make the component available to other parts of the app
export default SearchBar;
