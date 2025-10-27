import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }) {

    return (
        <Text style={styles.subtitle}>{children}</Text>

    );
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#9e3f04ff',
        paddingBottom: 6,
        marginVertical: 4,
        marginHorizontal: 24,
        borderBottomColor: '#9e3f04ff',
        borderBottomWidth: 2,
    }
});
