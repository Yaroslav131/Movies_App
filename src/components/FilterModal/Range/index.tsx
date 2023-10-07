import React from 'react';
import { Image, Text, View } from 'react-native';
import { IMAGES } from '@assets/images';
import { RangeSlider } from '@react-native-assets/slider';
import { styles } from './styles';
import { useAppSelector } from '@/hooks';

interface RangeProps {
    onChange: (range: [number, number]) => void
    rage: [number, number]
    title: string,
    rangeStep: number,
    minValue: number,
    maxValue: number,
}

function Range(props: RangeProps) {
  const theme = useAppSelector((state) => state.theme.value);

  return (
    <RangeSlider
      range={props.rage}
      minimumValue={props.minValue}
      maximumValue={props.maxValue}
      step={props.rangeStep}
      crossingAllowed={false}
      outboundColor={theme.filterModal.outboundColor}
      inboundColor={theme.filterModal.inboundColor}
      thumbStyle={undefined}
      trackStyle={undefined}
      minTrackStyle={undefined}
      midTrackStyle={undefined}
      maxTrackStyle={undefined}
      vertical={false}
      inverted={false}
      enabled
      trackHeight={5}
      thumbSize={15}
      slideOnTap
      onValueChange={props.onChange}
      onSlidingStart={undefined}
      onSlidingComplete={undefined}
      CustomThumb={(thumb: { value: number; thumb: 'min' | 'max'; }) => (
        <>
          <Image source={IMAGES.thumbImage} />
          <Text style={[styles.rangeText,
            { color: theme.filterModal.color }]}
          >
            {thumb.value}
          </Text>
        </>
      )}
      CustomMark={undefined}
      style={styles.rangeSlider}
      {...props}
    />
  );
}

export default Range;
