import * as Yup from 'yup';
import { languageDictionary } from '@/constants';

const currentLanguage = 'en';

const translations = languageDictionary[currentLanguage];

export const validationSchema = Yup.object().shape({
  searchInput: Yup.string()
    .max(15, translations.TOO_LONG),
});
