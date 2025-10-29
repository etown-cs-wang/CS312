import { useLayoutEffect } from 'react';
import { StyleSheet } from 'react-native';

import MealsList from '../components/MealsList';

import { CATEGORIES } from '../data/meal-data';
import { MEALS } from '../data/meal-data';

function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.catId;

    useLayoutEffect(() => {
        const category = CATEGORIES.find(
            (category) => category.id === catId
        );

        navigation.setOptions({
            title: category.title,
        });
    }, [catId, navigation]);


    const displayMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    return (
        <MealsList meals={displayMeals} />
    );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
