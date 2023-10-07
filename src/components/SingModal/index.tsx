import {
  Image,
  TouchableOpacity,
  Text,
  View,
  Animated,
} from 'react-native';
import { Field } from 'formik';
import { IMAGES } from '@assets/images';
import { useEffect, useState } from 'react';
import styles from './styles';

import AppFormField from '../AppFormField';
import AppForm from '../AppForm';
import AppFormSubmitButton from '../AppFormSubmitButton';
import { validationSingInSchema, validationSingUpSchema } from './constans';
import { handleEmailSignIn, handleEmailSingUp } from '@/api/firebase/authFirebase';
import { passwordComplexityType } from '@/types';
import { checkPasswordComplexity } from '@/helpingFunctions';
import { languageDictionary } from '@/constants';
import { useAppSelector } from '@/hooks';

interface SingModalProps {
    title: string
    onPress: () => void,
    type: 'SingIn' | 'SingUp'
}

function SingModal({ onPress, type, title }: SingModalProps) {
  const theme = useAppSelector((state) => state.theme.value);
  const [fillAnimation] = useState(new Animated.Value(0));
  const [complexity, setComplexity] = useState<passwordComplexityType>('Invalid');

  const currentLanguage = useAppSelector((state) => state.language).value;

  const translations = languageDictionary[currentLanguage];

  function handleSetComplexity(password: string) {
    setComplexity(checkPasswordComplexity(password));
  }

  useEffect(() => {
    let duration = 1000;
    let toValue = 0;

    switch (complexity) {
      case 'Low':
        duration = 1000;
        toValue = 0.33;
        break;
      case 'Medium':
        duration = 1000;
        toValue = 0.66;
        break;
      case 'High':
        duration = 1000;
        toValue = 1;
        break;
      default:
        duration = 1000;
        toValue = 0;
        break;
    }

    Animated.timing(fillAnimation, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start();
  }, [complexity]);

  return (
    <View style={[styles.container,
      { backgroundColor: theme.modals.backgroundColor }]}
    >
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={[styles.headerText,
            { color: theme.singModal.color }]}
          >
            {title}
          </Text>
        </View>
        <TouchableOpacity onPress={onPress} style={styles.cancelContainer}>
          <Image source={IMAGES.cancel} />
        </TouchableOpacity>
      </View>
      {type === 'SingUp' ? (
        <AppForm
          initialValues={{
            name: '', sername: '', email: '', password: '',
          }}
          validationSchema={validationSingUpSchema}
          onSubmit={(values: { name: string, sername: string, email: string, password: string }) => {
            handleEmailSingUp(values.email, values.password, values.name, values.sername);
            onPress();
          }}
        >

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
          <Field
            image={IMAGES.yourEmail}
            component={AppFormField}
            name="email"
            autoCompleteType="email"
            keyboardType="email-address"
            textContentType="emailAddress"
            placeholder={translations.EMAIL_PLACE_HOLDER}
          />
          <Field
            onChangePassword={handleSetComplexity}
            image={IMAGES.yourPassword}
            component={AppFormField}
            name="password"
            placeholder={translations.CREATE_PASSWORD_PLACE_HOLDER}
            secureTextEntry
            textContentType="password"
          />
          <View style={styles.difficultyLevelContainer}>
            <Text style={[styles.difficultyLevelText,
              { color: theme.singModal.color }]}
            >
              {`${translations.PASSWORD_DIFFICULTY_TEXT} ${complexity}`}
            </Text>
            <View style={styles.levelBarContainer}>
              <Animated.View
                style={[styles.levelBar, {
                  transform: [{ scaleX: fillAnimation }],
                }]}
              />
            </View>
          </View>
          <AppFormSubmitButton title={translations.SIGNUP_BUTTON_TEXT} />
        </AppForm>
      ) : (
        <AppForm
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSingInSchema}
          onSubmit={(values: { name: string, sername: string, email: string, password: string }) => {
            handleEmailSignIn(values.email, values.password);
            onPress();
          }}
        >
          <Field
            image={IMAGES.yourEmail}
            component={AppFormField}
            name="email"
            autoCompleteType="email"
            keyboardType="email-address"
            textContentType="emailAddress"
            placeholder={translations.EMAIL_PLACE_HOLDER}
          />
          <Field
            image={IMAGES.yourPassword}
            component={AppFormField}
            name="password"
            placeholder={translations.PASSWORD_PLACE_HOLDER}
            secureTextEntry
            textContentType="password"
          />
          <AppFormSubmitButton title={translations.SIGNIN_BUTTON_TEXT} />
        </AppForm>
      )}

    </View>
  );
}

export default SingModal;
