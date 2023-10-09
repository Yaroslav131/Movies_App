import { IMAGES } from '@assets/images';
import { View, ImageProps, Image } from 'react-native';
import { styles } from './styles';

interface CustomTabButtonProps {
    choosenImage: ImageProps,
    image: ImageProps,
    focused: boolean,
}

function CustomTabButton({ choosenImage, image, focused }: CustomTabButtonProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer]}>
        <Image
          style={styles.imageStyle}
          source={focused ? choosenImage : image}
        />
      </View>
      <View style={styles.dotContainer}>
        <Image
          style={{ display: focused ? 'flex' : 'none' }}
          source={IMAGES.chosenEllipse}
        />
      </View>
    </View>
  );
}

export default CustomTabButton;
