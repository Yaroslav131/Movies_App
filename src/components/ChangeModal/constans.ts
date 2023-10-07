import * as Yup from 'yup';
import { currentPasswordValidation } from '@/api/firebase/authFirebase';
import { CURRENT_LANGUAGE, languageDictionary } from '@/constants';

const translations = languageDictionary[CURRENT_LANGUAGE];

export const validationSingUpSchema = Yup.object().shape({
  name: Yup.string().required(translations.NAME_IS_REQUIRED).label('Name'),
  sername: Yup.string().required(translations.NAME_IS_REQUIRED).label('Name'),
  currentPassword: Yup.string()
    .required(translations.PASSWORD_IS_REQUIRED)
    .test('current-password', translations.PASSWORD_NOT_CORRECT, currentPasswordValidation)
    .label('Current Password'),

  newPassword: Yup.string()
    .min(4, translations.PASSWORD_MIN_LENGTH(4))
    .required(translations.PASSWORD_IS_REQUIRED)
    .label('Password'),
});
