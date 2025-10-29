import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { FavoritesContext } from '../store/favorites-context';
import { MEALS } from '../data/meal-data';

import MealsList from '../components/MealsList';

function FavoritesScreen() {
    const favoritesCtx = useContext(FavoritesContext);

    const favoriteMeals = MEALS.filter((meal) =>
        favoritesCtx.ids.includes(meal.id)
    );

    return (
        <MealsList meals={favoriteMeals} />
    );

}


export default FavoritesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
