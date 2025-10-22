import { StyleSheet, View, Text, FlatList } from 'react-native';

import MealItem from '../components/MealItem';

import { CATEGORIES } from '../data/meal-data';
import { MEALS } from '../data/meal-data';
import Meal from '../models/meal';

function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.catId;

    const category = CATEGORIES.find(
        (category) => category.id === catId
    );

    navigation.setOptions({
        title: category.title,
    });


    const displayMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    const renderCategoryItem = (itemData) => {

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
            {/* <Text>Meals Overview Screen - {catId}</Text> */}
            <FlatList
                data={displayMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderCategoryItem}
            />
        </View>
    );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
