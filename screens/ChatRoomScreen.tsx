import { FlatList, StyleSheet, SafeAreaView } from 'react-native';
import Message from '../components/Message';
import { useRoute, useNavigation } from '@react-navigation/core';
import chatRoomData from '../assets/dummy-data/Chats';
import MessageInput from '../components/MessageInput';

export default function ChatRoomScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  console.warn('Press id in clicked: ', route.params?.id);

  navigation.setOptions({title: 'Elon Moco'})

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={chatRoomData.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
      <MessageInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
