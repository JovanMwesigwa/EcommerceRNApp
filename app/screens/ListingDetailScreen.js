import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

import AppText from '../components/AppText/'
import  ListItem  from '../components/ListItem'
import colors from '../config/colors'

const ListingDetailScreen = () => {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/Welcome/jacket.jpg')} />
            <View style={styles.descriptionContainer}>
                <AppText style={styles.title}>New Jacket for Sale</AppText>
                <AppText style={styles.price}>$ 100</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        title="Mosh Hamedani"
                        subTitle="5 Listing"
                        image = {require('../assets/Welcome/mosh.jpg')}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300
    },
    descriptionContainer: {
        padding: 20,
    },
    title: {
        paddingBottom: 8
    },
    price: {
        color: colors.secondary
    },
    userContainer: {
        marginVertical: 40
    }
})

export default ListingDetailScreen


