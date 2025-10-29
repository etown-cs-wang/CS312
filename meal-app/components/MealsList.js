import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem';

function MealsList({ meals }) {

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
                data={meals}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );

}


export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
