import { StyleSheet, View, Text, Image } from "react-native";

function MealItem({ title, imageUrl, duration, complexity }) {
    console.log(imageUrl);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Image
                source={{ uri: imageUrl }}
                style={styles.image}
            />
            <Text>{duration}</Text>
            <Text>{complexity}</Text>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 200,
    }
});
