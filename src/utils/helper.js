import {Dimensions} from 'react-native';

export const sum = (a, b) => a + b;
export const {width, height} = Dimensions.get('window');
export const imagePlaceholder = 'https://via.placeholder.com/150';

export function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) return true;
  return false;
}
