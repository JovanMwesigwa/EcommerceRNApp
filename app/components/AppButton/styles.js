import { StyleSheet } from 'react-native';
import colors from '../../config/colors'

const styles = StyleSheet.create({
    button: {
        width: "100%",
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginVertical: 18

    },
    text: {
        fontSize: 18,
        color: colors.white
    }
})

export default styles;
