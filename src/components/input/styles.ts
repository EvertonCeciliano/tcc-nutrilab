import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.gray.dark,
        alignItems: 'center',
        marginVertical: 10,
        
        borderRadius: 60,
        width: 356,
        borderColor: colors.gray.light,
        borderWidth: 1,
    },
    input: {
        flex: 1,  padding: 10,
        color: colors.gray.light,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    dateContainer: {
        flex: 1,
        borderWidth: 1,
        
        borderRadius: 30,
        justifyContent: 'center',
    },
    dateText: {
        color: colors.gray.light,
       
    },
});