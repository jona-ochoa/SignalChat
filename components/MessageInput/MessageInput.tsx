import { 
    View, 
    StyleSheet,
    TextInput, 
    Pressable, 
    KeyboardAvoidingView, 
    Platform, 
} from 'react-native';
import { 
    SimpleLineIcons, 
    MaterialCommunityIcons,  
    AntDesign, 
    Ionicons, 
} from '@expo/vector-icons';
import React, { useState } from 'react';

const MessageInput = () => {
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        console.log('sending:', message);
        setMessage('');
    }

    const onPlusClicked = () => {
        console.log('On Plus Clicked');
    }

    const onPress = () => {
        if (message) {
            sendMessage();
        } else {
            onPlusClicked();
        }
    }

  return (
    <KeyboardAvoidingView  
        behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.root}
        keyboardVerticalOffset={100}
    >
        <View style={styles.inputContainer}>
            <SimpleLineIcons name="emotsmile" size={24} color="#333" style={styles.icon} />
            <TextInput 
            style={styles.input}
            value={message}
            onChangeText={setMessage}
            placeholder='Signal Message...'
            />
            <MaterialCommunityIcons name="camera-outline" size={24} color="#333" style={styles.icon} />
            <SimpleLineIcons name="microphone" size={24} color="#333" style={styles.icon} />
        </View>
        <Pressable onPress={onPress} style={styles.buttonContainer}>
            {message ? <Ionicons name="send" size={16} color="white" /> : <AntDesign name="plus" size={24} color="white" />}
        </Pressable>
    </KeyboardAvoidingView>
);
};

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        padding: 5,
    },
    inputContainer: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#333',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5,
        marginHorizontal: 5,
    },
    input: {
        flex: 1,
    },
    icon: {
        marginHorizontal: 5,
    },
    buttonContainer: {
        backgroundColor: '#3777f8',
        width: 40,
        height: 40,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
  });

export default MessageInput;
