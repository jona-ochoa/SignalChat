import { StyleSheet, View, FlatList, Text } from 'react-native';

import { RootTabScreenProps } from '../types';
import ChatRoomItem from '../components/ChatRoomItem/ChatRoomItem';
import chatRoomData from '../assets/dummy-data/ChatRoom';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.page}>
    
       <FlatList 
        data={chatRoomData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={ item } />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <Text>Messages</Text>}
      />
      
    </View>
  );       
}

const styles = StyleSheet.create({
  page: {
    // flex: 1,
    backgroundColor: '#fff',
  },
});
