import { IMAGES } from '@assets/images';
import { View, ImageProps, Image } from 'react-native';
import { styles } from './styles';

interface CustomTabButtonProps {
    choosenImage: ImageProps,
    image: ImageProps,
    focused: boolean,
    userIcon: boolean
}

const CustomTabButton = ({ choosenImage, image, focused, userIcon }: CustomTabButtonProps) => (
    <View style={styles.container}>
        <View style={[styles.imageContainer, { padding: userIcon && focused ? 6 : 0 }]}>
            <Image style={styles.imageStyle}
                source={focused ? choosenImage : image} />
        </View>
        <View style={styles.dotContainer}>
            <Image style={{ display: focused ? "flex" : "none" }}
                source={IMAGES.chosenEllipse} />
        </View>
    </View >
);

export default CustomTabButton;