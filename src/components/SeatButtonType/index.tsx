import { Text, View } from 'react-native';
import { SeatButtonType } from '@/types';
import { useAppSelector } from '@/hooks';
import { styles } from './styles';

interface SeatButtonProps {
    type: SeatButtonType,
    text: string
}

function SeatButton(props: SeatButtonProps) {
  const theme = useAppSelector((state) => state.theme.value);

  return (
    <View style={styles.container}>
      <View style={[styles.seatButton, {
        backgroundColor: props.type === 'Available'
          ? theme.seatButton.available : (
            props.type === 'Reserved'
              ? theme.seatButton.reserved
              : theme.seatButton.selected
          ),
      },
      { borderWidth: props.type === 'Available' ? 2 : 0 },
      { borderColor: theme.seatButton.borderColor }]}
      />
      <Text style={[styles.seatButtonText,
        { color: theme.bookingFilms.color }]}
      >
        {props.text}
      </Text>
    </View>
  );
}

export default SeatButton;
