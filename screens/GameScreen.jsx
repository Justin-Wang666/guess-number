import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Card from '../components/Card';

const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber == exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return randomNumber;
    }
};


const GameScreen = (props) => {
    
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomNumber(0, 99, props.selectedNumber)
    );

    const handleButton = (direction) => {
        if (
            (direction === 'Greater' && currentGuess > props.selectedNumber) ||
            (direction === 'lower' && current < props.selectedNumber)
        ) {
            Alert.alert(`You're a poo poo lier. Please learn to count`, [{ text: `I'm a poo poo. Sorry!`, style: 'cancel' }]);
        }
    }


    return (
        <View>
            <Text>Opponents's Guess</Text>
            <Card styles={styles.buttonContainer}>
                <Button title='Greater' onPress={() => handleButton('Greater')} />
                <Button title='Lower' onPress={() => handleButton('lower')} />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({


});

export default GameScreen;