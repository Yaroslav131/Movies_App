import * as Yup from 'yup';
import { CURRENT_LANGUAGE, languageDictionary } from '@/constants';

const translations = languageDictionary[CURRENT_LANGUAGE];

export const validationSingUpSchema = Yup.object().shape({
  name: Yup.string().required(translations.NAME_IS_REQUIRED).label('Name'),
  sername: Yup.string().required(translations.NAME_IS_REQUIRED).label('Name'),
  email: Yup.string()
    .email(translations.VALID_EMAIL)
    .required(translations.EMAIL_IS_REQUIRED)
    .label('Email'),
  password: Yup.string()
    .min(4, translations.PASSWORD_MIN_LENGTH(4))
    .required(translations.PASSWORD_IS_REQUIRED)
    .label('Password'),
});

export const validationSingInSchema = Yup.object().shape({
  email: Yup.string()
    .email(translations.VALID_EMAIL)
    .required(translations.EMAIL_IS_REQUIRED)
    .label('Email'),
  password: Yup.string()
    .required(translations.PASSWORD_IS_REQUIRED)
    .label('Password'),
});
