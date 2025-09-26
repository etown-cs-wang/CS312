import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, onPress }) {

    return (
        <View style={styles.buttonOutterContainer}>
            <Pressable
                style={(pressed) =>
                    // ternary operator
                    pressed ?
                        [styles.buttonInnerContainer, styles.pressed] :
                        styles.buttonInnerContainer
                }
                android_ripple={{ color: '#640233' }}
                onPress={onPress}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View >
    );

}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOutterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 4,
        elevation: 2, // shadow for android
        shadowColor: 'black',                   // shadow for ios
        shadowOffset: { width: 0, height: 2 },  // shadow for ios
        shadowRadius: 6,                        // shadow for ios
        shadowOpacity: 0.5                      // shadow for ios
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
});
