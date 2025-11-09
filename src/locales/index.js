import { zhTW } from './zh-TW'
import { en } from './en'

export const translations = {
  'zh-TW': zhTW,
  'en': en,
}

export const getTranslation = (language) => {
  return translations[language] || translations['zh-TW']
}
