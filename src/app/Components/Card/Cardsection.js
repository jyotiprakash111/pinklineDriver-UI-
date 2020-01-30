import React from 'react';
import { View } from 'react-native';

const Cardsection = (props, style) => (
        <View style={styles.containerStyle}>{props.children}</View>
    );

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
        marginBottom:20,
        // elevation:2
    },
};

export { Cardsection };
