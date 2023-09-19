import {
    EMAIL_IS_REQUIRED,
    NAME_IS_REQUIRED,
    PASSWORD_CAPITAL_LETTER,
    PASSWORD_IS_REQUIRED,
    PASSWORD_MIN_LENGTH,
    PASSWORD_NUMBER,
    PASSWORD_SMALL_LETTER,
    VALID_EMAIL
} from '@/constants';
import * as Yup from 'yup';

export const validationSingUpSchema = Yup.object().shape({
    name: Yup.string().required(NAME_IS_REQUIRED).label('Name'),
    sername: Yup.string().required(NAME_IS_REQUIRED).label('Name'),
    email: Yup.string()
        .email(VALID_EMAIL)
        .required(EMAIL_IS_REQUIRED)
        .label('Email'),
    password: Yup.string()
        .matches(/\w*[a-z]\w*/, PASSWORD_SMALL_LETTER)
        .matches(/\w*[A-Z]\w*/, PASSWORD_CAPITAL_LETTER)
        .matches(/\d/, PASSWORD_NUMBER)
        .min(8, PASSWORD_MIN_LENGTH(8))
        .required(PASSWORD_IS_REQUIRED)
        .label('Password'),
});

export const validationSingInSchema = Yup.object().shape({
    name: Yup.string().required(NAME_IS_REQUIRED).label('Name'),
    sername: Yup.string().required(NAME_IS_REQUIRED).label('Name'),
    email: Yup.string()
        .email(VALID_EMAIL)
        .required(EMAIL_IS_REQUIRED)
        .label('Email'),
    password: Yup.string()
        .required(PASSWORD_IS_REQUIRED)
        .label('Password'),
});
