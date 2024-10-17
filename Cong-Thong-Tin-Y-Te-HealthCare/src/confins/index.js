import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import vn from '../ngonngu/vn/translatsion.json'
import en from '../ngonngu/en/translatsion.json'
const resources = {
  en: { translation: en },
  vi: { translation:vn }
};

i18next.use(initReactI18next).init({
  lng: 'en', 
  debug: true,
  resources
})
