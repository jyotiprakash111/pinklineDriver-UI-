import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ea0788',
  },
  Card: {
    // marginHorizontal:20,
    height: '88%',
    // elevation: 2,
    width: '90%',
    borderRadius: 10,
    marginVertical: 30,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    // justifyContent:'center',
    // alignItems:'center',
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: '#ea0788',
    borderWidth: 0.5,
    marginTop: 10,
  },
  NameTxt: {
    fontWeight: '300',
    fontSize: 15,
  },
  reviewStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  Btnstyle: {
    height: 50,
    width: 150,
    backgroundColor: '#ea0788',
    marginVertical: 10,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainerStyle: {
    height: 150,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#FFF',
    borderColor: '#c1c1c1',
    borderWidth: 0.5,
    marginTop: 10,
  },
  txtInput: {
    marginLeft: 10,
    width: '100%',
    height: '100%',
    textAlignVertical: 'top',
  },
});
