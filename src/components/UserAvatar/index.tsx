import { View, Text } from 'react-native';
import { useAppSelector } from '@/hooks';
import { styles } from './styles';

interface UserAvatarProps {
    firstName?: string
    lastName?: string
}

function UserAvatar(props: UserAvatarProps) {
  const theme = useAppSelector((state) => state.theme.value);

  return (
    <View style={[styles.container,
      { backgroundColor: theme.detailScreen.iconBackgroundColor }]}
    >
      <Text style={[styles.iconText,
        { color: theme.detailScreen.color }]}
      >
        {props.firstName?.split('')[0]}
      </Text>
      <Text style={[styles.iconText,
        { color: theme.detailScreen.color }]}
      >
        {props.lastName?.split('')[0]}
      </Text>
    </View>
  );
}

export default UserAvatar;
