import Video from 'react-native-video';
import {
  Image, TouchableOpacity, View, TouchableWithoutFeedback,
} from 'react-native';
import { useState } from 'react';
import { IMAGES } from '@assets/images';
import styles from './styles';

interface VideoPlayerProps {
  children: React.ReactNode;
  centerButton?: React.ReactNode;
  isPlayerRound: boolean,
  video?: string
}

function VideoPlayer(props: VideoPlayerProps) {
  const [isControlsVisible, setIsControlsVisible] = useState(true);
  const [paused, setPaused] = useState(true);
  const [isPosterShow, setIsPosterShow] = useState(true);

  function handleSetpPaused() {
    setPaused(!paused);
    setIsPosterShow(false);

    if (paused) {
      handleHiddenButtons();
    }
  }

  function setControlsVisible() {
    if (!paused) {
      setIsControlsVisible(true);
      handleSetpPaused();
    }
  }

  function handleHiddenButtons() {
    setTimeout(() => { setIsControlsVisible(false); }, 4000);
  }
  return (

    <View style={styles.playerConatiner}>
      <TouchableWithoutFeedback style={styles.playerWrapper} onPress={setControlsVisible}>
        <Video
          source={props.video ? { uri: props.video } : require('@assets/videos/trailler.mp4')}
          paused={paused}
          style={[props.isPlayerRound
            ? { borderRadius: 15 }
            : { borderRadius: 0 }, styles.player]}
          repeat={false}
          controls={false}
          resizeMode="cover"
        />
      </TouchableWithoutFeedback>

      <View style={[styles.poster,
      { display: isPosterShow ? 'flex' : 'none' }]}
      >
        <Image
          style={[props.isPlayerRound
            ? { borderRadius: 15 }
            : { borderRadius: 0 }, styles.poster]}
          source={IMAGES.batmanPoster}
        />
      </View>

      <View style={[styles.buttonsConatiner, { display: isControlsVisible ? 'flex' : 'none' }]}>
        {props.children}

        <View style={styles.centerButtonContainer}>
          <TouchableOpacity
            onPress={handleSetpPaused}
            style={[styles.playButton, { display: paused ? 'flex' : 'none' }]}
          >
            <Image source={IMAGES.ellipsePlay} />
            <Image
              style={styles.playImage}
              source={IMAGES.mediaPlay}
            />
          </TouchableOpacity>
          {props.centerButton}
        </View>
      </View>
    </View>

  );
}

export default VideoPlayer;
