import React from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import AppText from '../AppText'

import styles from './styles'

const Card = ({title, image, subTitle}) => {
    return (
        <View style={styles.cartContainer}>
            <Image style={styles.imageStyle} source={image} />
            <View style={styles.descriptionContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{subTitle} </AppText>
            </View>
        </View>
    )
}

export default Card
