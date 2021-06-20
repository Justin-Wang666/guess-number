import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = (props) => {
    return <TextInput {...props}  style={{...styles.text, ...props.style}}/>;
};



const styles = StyleSheet.create({
text: {
    borderBottomColor : 'blue',
    borderBottomWidth:2,
}

});


export default Input;

