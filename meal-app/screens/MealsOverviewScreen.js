import { StyleSheet, View, Text, } from 'react-native';

import { MEALS } from '../data/meal-data';

function MealsOverviewScreen({ route }) {
    const catId = route.params.catId;

    const displayMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    return (
        <View style={styles.container}>
            <Text>Meals Overview Screen - {catId}</Text>
            {/* <FlatList
                data={displayMeals}
                keyExtractor={ }
                renderItem={ }
            /> */}
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
