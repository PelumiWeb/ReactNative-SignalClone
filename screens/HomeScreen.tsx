import * as React from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import ChatListComponent from '../components/ChatListComponent';
// import ChatListComponent from '../components/ChatListComponent/ChatListComponent';

import EditScreenInfo from '../components/EditScreenInfo';
import {  View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ChatRoomData from "../assets/dummy-data/UserChatRooms"

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View >
      <Text style={styles.chatHeader}>Chats</Text>
      <FlatList 
      // horizontal
      data={ChatRoomData}
      renderItem={(data) => (
      <ChatListComponent chatRoom={data} />
      )}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    
      />
   
     
    </View>
  );
}

const styles = StyleSheet.create({
  chatHeader: {
    padding: 10,
    paddingLeft: 20,
    fontSize: 15,
    fontWeight: "bold",
    color: "gray"
  }
});
