import * as Yup from 'yup';

export const validationSingUpSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').label('Name'),
    sername: Yup.string().required('Name is required').label('Name'),
    email: Yup.string()
        .email('Please enter valid email')
        .required('Email is required')
        .label('Email'),
    password: Yup.string()
        .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
        .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
        .matches(/\d/, 'Password must have a number')
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required')
        .label('Password'),
});

export const validationSingInSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').label('Name'),
    sername: Yup.string().required('Name is required').label('Name'),
    email: Yup.string()
        .email('Please enter valid email')
        .required('Email is required')
        .label('Email'),
    password: Yup.string()
        .required('Password is required')
        .label('Password'),
});