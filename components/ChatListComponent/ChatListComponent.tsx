import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {TouchableWithoutFeedback} from 'react-native-gesture-handler'

const ChatListComponent = ({chatRoom}) => {
    const user = chatRoom.item.users[1]
    const navigation = useNavigation()

    const onclick = () => {
        navigation.navigate('ChatRoom')
    }
    

    return (
        <TouchableWithoutFeedback style={styles.container} onPress={onclick}>
            <Image source={{uri: user.imageUri}} style={styles.image}/>
            <View style={styles.badgeContainer}> 
            <Text style={styles.badgeContainerText}>
               {chatRoom.index}
            </Text>

            </View>
            <View style={{flex: 1, paddingLeft: 10, padding: 10}}> 
                <View style={styles.row}> 
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.text}>{chatRoom.item.lastMessage.createdAt}</Text>
                </View>
                <Text numberOfLines={1} style={styles.text}>{chatRoom.item.lastMessage.content}  </Text>
            </View>

        </TouchableWithoutFeedback>
    )
}

export default ChatListComponent

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        position: 'relative',


        // justifyContent: "space-between"
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    name: {
        fontWeight: "bold",
        paddingLeft: 3,

    },
    text: {
        color: "grey",
    },
    badgeContainer: {
        backgroundColor: "#3872e9",
        width: 20,
        height:  20,
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 1,
        position: 'absolute',
        top: 15,
        left: 58,
    },
    badgeContainerText: {
        color: "white",
        fontSize: 12,

    }
})
