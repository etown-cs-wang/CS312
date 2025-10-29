import { useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { FavoritesContext } from '../store/favorites-context';
import { MEALS } from '../data/meal-data';

import MealItem from '../components/MealItem';

function FavoritesScreen() {
    const favoritesCtx = useContext(FavoritesContext);

    const favoriteMeals = MEALS.filter((meal) =>
        favoritesCtx.ids.includes(meal.id)
    );

    const renderItem = (itemData) => {

        const mealItemProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            duration: itemData.item.duration,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability,
        };

        return (
            <MealItem {...mealItemProps} />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={favoriteMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
}


export default FavoritesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
