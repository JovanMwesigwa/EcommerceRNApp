import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'

const ListItemSeparator = () => {
    return (
        <View style={styles.separator}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    separator: {
        width: "100%",
        backgroundColor: colors.light,
        height: 1
    }
})

export default ListItemSeparator

