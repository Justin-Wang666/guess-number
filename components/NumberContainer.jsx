import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NumberContainer = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#12CCFF'
    },
    number: {
        fontSize: 22,
    },
});

export default NumberContainer;