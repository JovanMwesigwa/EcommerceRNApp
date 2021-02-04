import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ListItem from '../components/ListItem'
import ListItemDeleteAction from '../components/ListItem/ListItemDeleteAction'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'


const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/Welcome/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/Welcome/mosh.jpg')
    }
]


const MessagesScreen = () => {

    const [ messages, setMessages ] = useState(initialMessages);
    const [ refreshing, setRefreshing ] = useState(false);

    const handleDeleteMessage = (message) => {
        setMessages(messages.filter(m => m.id !== message.id))
    }

    return (
        <Screen>
            <FlatList 
                data={messages}
                keyExtractor={messages => messages.id.toString()}
                renderItem={({item}) => 
                <ListItem
                    title={item.title}
                    subTitle={item.subTitle}
                    image={item.image}
                    onPress={() => console.log("Message", item)}
                    renderRightActions={() => <ListItemDeleteAction onPress={() => handleDeleteMessage(item)} />}
                />
            }
            ItemSeparatorComponent={() => <ListItemSeparator />}
            refreshing={refreshing}
            onRefresh={() => setMessages([
                {
                    id: 2,
                    title: 'T2',
                    description: 'D2',
                    image: require('../assets/Welcome/mosh.jpg')
                }
            ])}
            />
        </Screen>
    )
}

export default MessagesScreen

const styles = StyleSheet.create({})
