import { useLayoutEffect } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { MEALS } from "../data/meal-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Subtitle";
import IconButton from "../components/IconButton";


function MealDetailsScreen({ route, navigation }) {

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find(
        (meal) => meal.id === mealId
    );

    const headerButtonHandler = () => {
        console.log("Pressed!");
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedMeal.title,
            headerRight: () => <IconButton icon="star" onPress={headerButtonHandler} />,
        });
    }, [navigation]);

    return (
        <ScrollView>
            <Image
                source={{ uri: selectedMeal.imageUrl }}
                style={styles.image} />

            <Text style={styles.title}>{selectedMeal.title}</Text>

            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
            />

            <Subtitle>Ingredients:</Subtitle>

            <View>
                {selectedMeal.ingredients.map(
                    (ingredient) => (
                        <Text
                            key={ingredient}
                            style={styles.listItem}
                        >
                            {ingredient}
                        </Text>
                    )
                )}
            </View>

            <Subtitle>Steps:</Subtitle>
            <View>
                {selectedMeal.steps.map(
                    (step) => (
                        <Text
                            key={step}
                            style={styles.listItem}
                        >
                            {step}
                        </Text>
                    )
                )}
            </View>


        </ScrollView>


    );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        margin: 8,
        padding: 8,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#943d03ff',
    },
    details: {
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 8,
    },
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 24,
        backgroundColor: '#e2b497ff',
    }
});
