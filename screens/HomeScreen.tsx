import { StyleSheet, View, FlatList, Text, Pressable } from 'react-native';
import { Auth } from 'aws-amplify';
import ChatRoomItem from '../components/ChatRoomItem';
import chatRoomData from '../assets/dummy-data/ChatRoom';

export default function TatOneScreen() {

  const logOut = () => {
    Auth.signOut();
  }
 
  return (
    <View style={styles.page}>
      <FlatList 
        data={chatRoomData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={ item } />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <Text>Messages</Text>}
      />
      {/* <Pressable onPress={logOut} style={styles.pressable}>
        <Text style={styles.text}>Logout</Text>
      </Pressable> */}
    </View>
  );       
} 

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  text:{
    fontSize: 20,
    color: '#000'
  },
  pressable: {
    backgroundColor: '#ff0000', 
    height: 50, 
    margin: 10, 
    borderRadius: 25, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
});
