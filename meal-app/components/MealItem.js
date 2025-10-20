import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Image, Platform, Pressable } from "react-native";

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    console.log(imageUrl);

    const navigation = useNavigation();

    const selectMealItemHandler = () => {
        navigation.navigate(
            "MealDetails",
            { mealId: id }
        );
    };

    return (
        <View style={styles.container}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) =>
                    pressed ? styles.buttonPressed : null
                }
                onPress={selectMealItemHandler}
            >
                <Image
                    source={{ uri: imageUrl }}
                    style={styles.image}
                />
                <Text style={styles.title}>{title}</Text>
                <View style={styles.details}>
                    <Text>{duration}</Text>
                    <Text>{complexity.toUpperCase()}</Text>
                    <Text>{affordability.toUpperCase()}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 4, // for Android shadow
        shadowColor: 'black', // for iOS shadow
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    buttonPressed: {
        opacity: 0.5,
    },
    title: {
        margin: 8,
        padding: 8,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        // margin: 8
    },
    details: {
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 8,
    }
});
