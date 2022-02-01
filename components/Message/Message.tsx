import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const colorBlue = '#3777f0';
const colorWhite = '#f1f1f1';

const myID = 'u1';

const Message = ({ message }) => {
    const isMe = message.user.id === myID;
  return (
    <View style={[styles.container, isMe ? styles.containerRight : styles.containerLeft]}
    >
      <Text style={{ color: isMe ? 'black' : 'white' }}>{message.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: '75%',
    },
    text: {
        color: '#fff',
    },
    containerLeft: {
        backgroundColor: colorBlue,
        marginLeft: 10,
        marginRight: 'auto',
    },
    containerRight: {
        backgroundColor: colorWhite,
        marginLeft: 'auto',
        marginRight: 10,
    },
})

export default Message;
