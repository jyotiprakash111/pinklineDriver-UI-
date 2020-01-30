import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      overflow: 'hidden',
    },
    card: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 30,
      marginVertical: 8,
      marginHorizontal: 0,
      height: 250,
      elevation: 5,
    },
    title: {
      fontSize: 10,
    },
    inneritem: {
      // marginBottom:100,
    },
    img: {
      height: 50,
      width: 50,
      borderRadius: 2,
      borderWidth: 0.5,
      borderColor: '#000',
    },
    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    headerContentStyle2: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      marginLeft: 130,
    },
    headerTextStyle: {
      fontSize: 18,
    },
    thumbnailStyle: {
      height: 50,
      width: 50,
      overflow: 'hidden',
      borderRadius: 10,
    },
    thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10,
    },
  });