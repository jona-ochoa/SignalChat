import * as React from 'react';
import { ColorSchemeName, Text, View, Image, useWindowDimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

import ChatRoomScreen from "../screens/ChatRoomScreen";
import HomeScreen from "../screens/HomeScreen";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useNavigation,
} from "@react-navigation/native";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Root" 
        component={HomeScreen} 
        options={{ headerTitle: props => <HomeHeader {...props} /> }}
      />
      <Stack.Screen 
        name="ChatRoom"
        component={ChatRoomScreen} 
        options={{ 
          
          headerTitle: props => <ChatRoomHeader {...props} />, 
          headerTitle: ChatRoomHeader,
          headerBackTitleVisible: false,
        }}

      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}

const HomeHeader = (props) => {
  const { width } = useWindowDimensions();

  return(
    <View style={{
      flexDirection: 'row', 
      justifyContent: 'space-between',
      padding: 10,
      width: width - 25,
      marginLeft: 25,
      alignItems: 'center',
    }}
    >
      <Image 
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg'}} 
        style={{width: 30, height:30, borderRadius: 30,}} />
      <Text style={{ flex: 1, marginLeft: 10, color: '#333', fontWeight: 'bold' }}>
        {props.title}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Entypo name="camera" size={24} color="#333" style={{marginHorizontal:15}} />
        <Entypo name="edit" size={24} color="#333" style={{marginHorizontal:15}} />
      </View>  
    </View>
  )
}

const ChatRoomHeader = (props) => {
  const { width } = useWindowDimensions();

  return(
    <View style={{
      flexDirection: 'row', 
      justifyContent: 'space-between',
      padding: 10,
      alignItems: 'center',
    }}
    >
      <Image 
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg'}} 
        style={{width: 30, height:30, borderRadius: 30,}} />
      <Text style={{ color: '#333', fontWeight: 'bold' }}>
        {props.children}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <FontAwesome name="video-camera" size={24} color="#333" style={{marginHorizontal:5}} />
        <FontAwesome name="phone" size={24} color="#333" style={{marginHorizontal:5}}/>
        {/* <MaterialCommunityIcons name="dots-vertical" size={24} color="#333" /> */}
      </View>  
    </View>
  )
} 

