import { View, Text, Image, StyleSheet } from "react-native";
import { MEALS } from "../data/meal-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Subtitle";


function MealDetailsScreen({ route, navigation }) {

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find(
        (meal) => meal.id === mealId
    );

    return (
        <View>
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

            {selectedMeal.ingredients.map(
                (ingredient) => (
                    <Text key={ingredient}>{ingredient}</Text>
                )
            )};

            <Subtitle>Steps:</Subtitle>


        </View>


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
    }
});
