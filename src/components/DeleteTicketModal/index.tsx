import {
  Image,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { IMAGES } from '@assets/images';
import styles from './styles';
import { languageDictionary } from '@/constants';
import { useAppSelector } from '@/hooks';

interface DeleteTicketModalProps {
    onCloseModal: () => void,
    onSubmit: () => void,
}

function DeleteTicketModal({ onSubmit, onCloseModal }: DeleteTicketModalProps) {
  const theme = useAppSelector((state) => state.theme.value);
  const currentLanguage = useAppSelector((state) => state.language).value;

  const translations = languageDictionary[currentLanguage];

  return (
    <View style={[styles.container,
      { backgroundColor: theme.deleteTicketModal.backgroundColor }]}
    >
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={[styles.headerText,
            { color: theme.singModal.color }]}
          >
            {`${translations.DELETE}?`}
          </Text>
        </View>
        <TouchableOpacity onPress={onCloseModal} style={styles.cancelContainer}>
          <Image source={IMAGES.cancel} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          onSubmit();
          onCloseModal();
        }}
        style={[styles.buttonStyle,
          { backgroundColor: theme.deleteTicketModal.submitButton }]}
      >
        <Text style={[styles.submitText,
          { color: theme.singModal.color }]}
        >
          {translations.DELETE}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default DeleteTicketModal;
