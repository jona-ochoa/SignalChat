import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './index.styles';

export default function ChatRoomItem({ chatRoom }) {
  const user = chatRoom.users[1];
  return (
    <View style={styles.container}>
    <Image source={{uri: user.imageUri}} style={styles.image} />
{/* operador ternario */}
    {chatRoom.newMessages ? <View style={styles.badgeContainer}>
      <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
    </View> : null}

    <View style={styles.rightContainer}>
      <View style={styles.row}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
      </View>
    <Text numberOfLines={1} ellipsizeMode='middle' style={styles.text}>{chatRoom.lastMessage.content}</Text>
    </View>
  </View>
  );
};


