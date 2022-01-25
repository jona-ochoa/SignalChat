import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 30,
      marginRight: 10,
    },
    badgeContainer: {
      backgroundColor: '#3777f0',
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      left: 45,
      top: 10,
    },
    badgeText: {
      color: '#fff',
      fontSize: 12,
    },
    rightContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 3,
    },
    text: {
      fontSize: 16,
      color: 'grey',
    },
  });

  export default styles;