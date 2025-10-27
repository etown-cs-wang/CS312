import { Pressable, Text, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

function IconButton({ icon, onPress }) {
    return (
        <Pressable onPress={onPress} style={
            ({ pressed }) => [
                pressed && styles.buttonClicked
            ]
        }>
            <Ionicons name={icon} size={24} color="#fc8200ff" />
        </Pressable>

    );
}

export default IconButton;

const styles = StyleSheet.create({
    buttonClicked: {
        opacity: 0.5,
    }
});
