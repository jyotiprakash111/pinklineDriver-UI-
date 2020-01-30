// Import Libraries for making header component
import React from 'react';
import { View } from 'react-native';

const CardHeader = (props) => (
    <View style={styles.containerStyle}>{props.children}</View>
);

const styles = {
containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#f7f7f7',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    overflow: 'hidden',
    // borderRadius: 10,
},
};

export { CardHeader };
