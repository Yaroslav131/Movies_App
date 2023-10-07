import {
  Image, Text, TouchableOpacity, View,
} from 'react-native';
import { IMAGES } from '@assets/images';
import { ListTicket } from '@/types';
import { handleCutText } from '@/helpingFunctions';
import { languageDictionary } from '@/constants';
import { useAppSelector } from '@/hooks';
import styles from './styles';

interface TicketFlatListItemProps {
  item: ListTicket,
  type: string,
  onDeleteTicket: (id: string) => void
}

function TicketFlatListItem({ item, type, onDeleteTicket }: TicketFlatListItemProps) {
  const theme = useAppSelector((state) => state.theme.value);
  const currentLanguage = useAppSelector((state) => state.language).value;

  const translations = languageDictionary[currentLanguage];

  return (
    <View style={[styles.itemContainer,
    { backgroundColor: theme.ticketScreen.itemBackgroundColor }]}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item.poster }} />
      </View>
      <View style={styles.informContainer}>
        <Text style={[styles.title,
        { color: theme.ticketScreen.color }]}
        >
          {item.title}
        </Text>
        <View>
          <Text style={[styles.dateText,
          { color: theme.ticketScreen.color }]}
          >
            Date:
            {' '}
            {item.date}
          </Text>
          <View style={styles.ticketIdContainer}>
            <Image style={styles.ticketImage} source={IMAGES.ticket} />
            <Text style={[styles.ticketIdText,
            { color: theme.ticketScreen.color }]}
            >
              {handleCutText(item.ticketId, 8)}
            </Text>
          </View>
          <View style={[styles.line,
          { backgroundColor: theme.ticketScreen.color }]}
          />

          <View style={styles.bottomContainer}>
            <View style={styles.seatsContainer}>
              <Text style={[styles.seatsText,
              { color: theme.ticketScreen.color }]}
              >
                {item.seatCount}
                {' '}
                {translations.SEATS}
              </Text>
              <Text style={[styles.priceText,
              { color: theme.ticketScreen.color }]}
              >
                {item.coast}
                {' '}
                $
              </Text>
            </View>
            {type === 'upcoming' && (
              <View style={styles.cancelButtonContainer}>
                <TouchableOpacity
                  onPress={() => { onDeleteTicket(item.ticketId); }}
                  style={[styles.cancelButton,
                  { backgroundColor: theme.ticketScreen.buttonBackgroundColor }]}
                >
                  <Text style={[styles.cancelText,
                  { color: theme.ticketScreen.cancelButtonColor }]}
                  >
                    {translations.CANCEL}
                  </Text>
                  <Image source={IMAGES.cancelIcon} />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

export default TicketFlatListItem;
