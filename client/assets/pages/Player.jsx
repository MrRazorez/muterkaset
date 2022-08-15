import * as React from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import { useSelector } from 'react-redux';
import * as ScreenOrientation from 'expo-screen-orientation';

export function Player() {
    const setOrientation = () => {
        if (Dimensions.get('window').height > Dimensions.get('window').width) {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
        } else {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
        }
    }

    const urlVideos = useSelector((state) => state.urlVideos.value);

    const video = React.useRef(null);

    console.log(urlVideos);

    return (
      <View style={styles.container}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: urlVideos,
          }}
          useNativeControls
          resizeMode="contain"
          onFullscreenUpdate={setOrientation}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
