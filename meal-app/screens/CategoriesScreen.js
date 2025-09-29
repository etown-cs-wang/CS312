import { StatusBar } from "expo-status-bar";
import { FlatList, View } from "react-native";

import { CATEGORIES } from "../data/meal-data";
import CategoryGridTile from "../components/CategoryGridTile";


const renderCategoryItem = (item) => {
    return (
        <CategoryGridTile
            title={item.title}
            color={item.color}
        />
    );
};

function CategoriesScreen() {
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => renderCategoryItem(itemData.item)}
            numColumns={2}
        />
    );
}

export default CategoriesScreen;
