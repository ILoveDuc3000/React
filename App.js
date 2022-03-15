
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import YoutubePlayer from 'react-native-youtube-iframe'

const App  = () => {
  
  return (
    <View>
    <YoutubePlayer
      height={200}
      play={true}
      videoId={'84WIaK3bl_s'}
    />
    <Text>nkjsdfhlkugfi</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
