import React from 'react'
import { Text, View,TouchableHighlight,Image } from 'react-native'
import colors from '../../config/colors'
import AppText from '../AppText'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import styles from './style'

const ListItem = ({title, subTitle, image, onPress,imageComponent, renderRightActions}) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}>
                <View style={styles.container}>
                    {imageComponent}
                    {image && <Image style={styles.imageStyle} source={image} />}
                    <View style={styles.descriptionContainer}>
                        <AppText style={styles.titleStyle}>{title}</AppText>
                        {subTitle && <AppText style={styles.subtitleStyle}>{subTitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}


export default ListItem

