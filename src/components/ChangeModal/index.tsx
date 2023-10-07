import {
  Image,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { Field } from 'formik';
import { IMAGES } from '@assets/images';
import styles from './styles';

import AppFormField from '../AppFormField';
import AppForm from '../AppForm';
import AppFormSubmitButton from '../AppFormSubmitButton';
import { validationSingUpSchema } from './constans';
import { updateProfile } from '@/api/firebase/authFirebase';
import { languageDictionary } from '@/constants';
import { useAppSelector } from '@/hooks';

interface ChangeModalProps {
    onPress: () => void,
}

function ChangeModal({ onPress }: ChangeModalProps) {
  const theme = useAppSelector((state) => state.theme.value);
  const currentLanguage = useAppSelector((state) => state.language).value;
  const translations = languageDictionary[currentLanguage];

  return (
    <View style={[styles.container,
      { backgroundColor: theme.modals.backgroundColor }]}
    >
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={[styles.headerText,
            { color: theme.singModal.color }]}
          >
            {translations.EDIT_PROFILE}
          </Text>
        </View>
        <TouchableOpacity onPress={onPress} style={styles.cancelContainer}>
          <Image source={IMAGES.cancel} />
        </TouchableOpacity>
      </View>

      <AppForm
        initialValues={{
          name: '', sername: '', newPassword: '', password: '',
        }}
        validationSchema={validationSingUpSchema}
        onSubmit={(values: { name: string, sername: string, email: string, password: string }) => {
          updateProfile(values.password, values.name, values.sername);
          onPress();
        }}
      >
        <Text style={[styles.sectionText,
          { color: theme.modals.color }]}
        >
          {translations.CHANGE_PERSONAL_DATE}
        </Text>
        <Field
          image={IMAGES.yourName}
          component={AppFormField}
          name="name"
          placeholder={translations.NAME_PLACE_HOLDER}
        />
        <Field
          image={IMAGES.yourSername}
          component={AppFormField}
          name="sername"
          placeholder={translations.SERNAME_PLACE_HOLDER}
        />
        <Text style={[styles.sectionText,
          { color: theme.modals.color }]}
        >
          {translations.CHANGE_PASSWORD}
        </Text>
        <Field
          image={IMAGES.yourPassword}
          component={AppFormField}
          name="newPassword"
          placeholder={translations.ENTER_NEW_PASSWORD}
          secureTextEntry
          textContentType="password"
        />
        <Field
          image={IMAGES.yourPassword}
          component={AppFormField}
          name="currentPassword"
          placeholder={translations.ENTER_PASSWORD}
          secureTextEntry
          textContentType="password"
        />
        <AppFormSubmitButton title={translations.EDIT} />
      </AppForm>
    </View>
  );
}

export default ChangeModal;
