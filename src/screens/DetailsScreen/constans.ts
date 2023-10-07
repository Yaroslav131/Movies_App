import * as Yup from 'yup';
import { languageDictionary } from '@/constants';

const currentLanguage = 'en';

const translations = languageDictionary[currentLanguage];

export const validationCommentSchema = Yup.object().shape({
  comment: Yup.string()
    .max(50, translations.COMMENT_TOO_LONG)
    .required(translations.COMMENT_IS_REQUIRED)
    .label('Comment'),
});
