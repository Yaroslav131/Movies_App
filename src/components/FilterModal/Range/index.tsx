import React from 'react';
import { Image, Text, View, useColorScheme } from 'react-native';
import { ligthTheme } from '@/theme';
import { IMAGES } from '@assets/images';
import { styles } from './styles';
import { RangeSlider } from '@react-native-assets/slider'

interface RangeProps {
    onChange: (range: [number, number]) => void
    rage: [number, number]
    title: string,
    rangeStep: number,
    minValue: number,
    maxValue: number,
}

const Range = (props: RangeProps) => {
    const theme = useColorScheme() === "dark" ? ligthTheme : ligthTheme

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
            enabled={true}
            trackHeight={5}
            thumbSize={15}
            slideOnTap={true}
            onValueChange={props.onChange}
            onSlidingStart={undefined}
            onSlidingComplete={undefined}
            CustomThumb={(thumb: { value: number; thumb: "min" | "max"; }) => {
                return (
                    <>
                        <Image source={IMAGES.thumbImage} />
                        <Text style={[styles.rangeText,
                        { color: theme.filterModal.color }]}>
                            {thumb.value}
                        </Text>
                    </>)
            }}
            CustomMark={undefined}
            style={styles.rangeSlider}
            {...props}
        />
    );
};

export default Range;