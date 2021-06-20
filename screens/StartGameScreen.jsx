import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import GameScreen from './GameScreen';



const StartGameScreen = () => {

    const minValue = 1;

    const maxValue = 99;

    const [cleanedValue, setCleanedValue] = useState('');

    const [isComfirmed, setIsComfirmed] = useState(false);

    const [selectedNumber, setselectedNumber] = useState(0);

    const handleTouchableScreen = () => {
        Keyboard.dismiss();
    };

    const handleUserInputChange = (inputValue) => {
        setCleanedValue(inputValue.replace(/[^0-9]/g, ''));
    };

    const handleReset = () => {
        setCleanedValue('');
        setIsComfirmed(false);
        setCleanedValue(0);
    };

    const handleComfirm = () => {
        const value = parseInt(cleanedValue);
        if (isNaN(value) || value < minValue || value > maxValue) {
            Alert.alert(
                'The numberis not valid',
                `number must be between ${minValue} and ${maxValue}`,
                [
                    {
                        text: 'OK',
                        style: 'destructive',
                        onPress: () => {
                            setCleanedValue('');
                        },
                    },
                ]
            );
        } else {
            setIsComfirmed(true);
            setselectedNumber(value);
            setCleanedValue('');
        }

    };

    let confirmOutput;
    if (isComfirmed) {
        confirmOutput = (
            <Card style={styles.summaryContainer}>
                <Text>Your number is:</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title='START GAME' onPress={() => {}} color="9fff00"></Button>
            </Card>
        );
    }

    let startGameContent = (
        <TouchableWithoutFeedback onPress={handleTouchableScreen}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new game</Text>
                <Card>
                    <Text>select a number</Text>
                    <Input keyboardType="number-pad" maxLength={2} autoFocus style={styles.input} blurOnSubmit onChangeText={handleUserInputChange} value={cleanedValue} />
                    <View style={styles.buttonContainer}>
                        <Button title='Reset' onPress={handleReset} color="red"></Button>
                        <Button title='Confirm' onPress={handleComfirm} color="green"></Button>
                    </View>
                </Card>
                {confirmOutput}
            </View>
        </TouchableWithoutFeedback>
    );

    if (selectedNumber) {
        startGameContent = <GameScreen />;
    }

    return startGameContent;
};

const styles = StyleSheet.create({
    screen: {
        //flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    input: {
        width: 100,
    },
});

export default StartGameScreen;
