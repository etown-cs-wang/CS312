import { useState } from "react";
import { TextInput, View, Text, Alert, StyleSheet } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen({ onPickedNumber }) {

    const [enteredNumber, setEnteredNumber] = useState('');

    const confirmInputHandler = () => {
        if (isNaN(enteredNumber) || enteredNumber <= 0 || enteredNumber > 99) {
            Alert.alert(
                'Invalid Numer!',
                'Number must be a number between 1 and 99.',
                [{ text: 'okay', style: 'destructive', onPress: () => setEnteredNumber('') }]
            );
        }
        else {
            onPickedNumber(enteredNumber);
        }
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={setEnteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: '#4e0349',
        elevation: 8, // shadow for android
        shadowColor: 'black',                   // shadow for ios
        shadowOffset: { width: 0, height: 2 },  // shadow for ios
        shadowRadius: 6,                        // shadow for ios
        shadowOpacity: 0.5                      // shadow for ios
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
});





