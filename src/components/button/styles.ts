import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const s = StyleSheet.create({

buttonContent: {
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
},

baseButton:{
    borderRadius: 60,
    paddingInline:92,
    paddingBlock: 17,
    width: 356,
    marginHorizontal: 'auto',
    marginBlock: 15,

},

primary: {
    color: colors.gray.bg,
    backgroundColor: colors.green.light,
},
secondary: {
    backgroundColor: colors.gray.dark,
    color: colors.green.light,
},

img: {
    width: 22,
    height: 22,
    marginRight: 10,
},
text: {
   
    fontSize: 16,
}})