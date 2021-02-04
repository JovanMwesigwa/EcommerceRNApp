import { StyleSheet } from 'react-native';
import colors from '../../config/colors'

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        padding: 20
    },
    descriptionContainer: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    imageStyle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 8
    },
    titleStyle: {
        fontSize: 15,
        fontWeight: "600"
    },
    subtitleStyle: {
        fontSize: 15,
        color: colors.medium
    },
})

export default styles