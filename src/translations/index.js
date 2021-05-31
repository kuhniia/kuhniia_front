import en from './en';
import ua from './ua';

const defaultLanguage = 'en';
let exported = defaultLanguage;

if (defaultLanguage === 'ua') {
  exported = ua;
}

if (defaultLanguage === 'en') {
  exported = en;
}

export { exported as texts };
