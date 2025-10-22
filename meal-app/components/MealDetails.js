import { View, Text, StyleSheet } from 'react-native';

function MealDetails({ duration, complexity, affordability }) {

    return (
        <View style={styles.details}>
            <Text>{duration}</Text>
            <Text>{complexity}</Text>
            <Text>{affordability}</Text>
        </View>
    );
}

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 8,
    }
});

