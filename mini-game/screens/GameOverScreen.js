import { StyleSheet, View, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function GameOverScreen({ userNumber }) {
    return (
        <View style={styles.rootContainer}>
            <Text style={styles.title}>Game Over!</Text>
            <Text style={styles.title}>Your number was: {userNumber}</Text>
            <PrimaryButton>Start New Game</PrimaryButton>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#f2f544ff',
    }
});
