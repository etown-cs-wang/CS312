import { useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";

import PrimaryButton from "../components/PrimaryButton";


function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    return rndNum;
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber }) {
    const initNumber = generateRandomBetween(1, 100, userNumber);
    const [guessNumber, setGuessNumber] = useState(initNumber);

    const nextGuessHandler = (direction) => {
        if ((direction === 'lower' && guessNumber < userNumber) ||
            (direction === 'higher' && guessNumber > userNumber)) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = guessNumber;
        } else {
            minBoundary = guessNumber + 1;
        }
        const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary);
        setGuessNumber(newRandomNumber);
    };

    return (
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{guessNumber}</Text>
            </View>

            <Text>Lower or Higher?</Text>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>+</PrimaryButton>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    titleContainer: {
        alignItems: 'center',
        marginVertical: 60,
        marginHorizontal: 24,
        borderWidth: 2,
        borderColor: '#f2f544ff',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#f2f544ff',
    }
});
