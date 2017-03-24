import React from 'react';
import { AppRegistry, View, Image, StatusBar } from 'react-native';

const page1 = () => (
<View style={{ backgroundColor: 'rgb(100,65,165)', flex: 1, alignItems: 'center' }}>
  <View>
    <StatusBar hidden />
    <Image 
    style={{ height: 100, width: 210, marginTop: 253.5 }} 
    source={require('./hw_img/logo_twitch.png')} 
    />
  </View>
</View>
);

export default page1;