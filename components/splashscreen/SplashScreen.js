import React from 'react';
import { View, Text } from 'react-native';
import { Video } from 'expo-av';

export default function SplashScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Video
        source={require('../assets/splash.mp4')}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{ flex: 1 }}
        onReadyForDisplay={() => setVideoLoaded(true)}
      />
    </View>
  );
}
