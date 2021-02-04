import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import AppButton from '../components/AppButton'

const WelcomeScreen = () => {
    return (
        <ImageBackground 
        blurRadius={3}
            style={styles.background}
            source={require('../assets/Welcome/background.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/Welcome/logo-red.png')} />
                <Text style={styles.tagline}>Sell what you dont need</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login" />
                <AppButton title="Register" color="secondary" />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
    },
    tagline: {
        fontSize: 20,
        paddingVertical: 12,
        fontWeight: '600',
        textTransform: 'capitalize'
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    buttonsContainer: {
        width: "100%",
        padding: 15
    }
})

export default WelcomeScreen

