import React from 'react'
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native'

const Screen = ({children}) => {
    return (
        <SafeAreaView style={styles.screenContainer}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1
    }
})

export default Screen

