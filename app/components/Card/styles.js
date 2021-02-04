import { StyleSheet } from 'react-native'
import colors from '../../config/colors';

const styles = StyleSheet.create({
    cartContainer: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden'
   },
    imageStyle: {
        width: "100%",
        height: 200,
    },
    descriptionContainer: {
        padding: 20,
    },
    title: {
        marginBottom: 7,
        fontWeight: 'bold'
    },
    subtitle: {
        color: colors.secondary
    }
})

export default styles;