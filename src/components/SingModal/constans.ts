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
        .min(4, PASSWORD_MIN_LENGTH(4))
        .required(PASSWORD_IS_REQUIRED)
        .label('Password'),
});

export const validationSingInSchema = Yup.object().shape({
    email: Yup.string()
        .email(VALID_EMAIL)
        .required(EMAIL_IS_REQUIRED)
        .label('Email'),
    password: Yup.string()
        .required(PASSWORD_IS_REQUIRED)
        .label('Password'),
});
