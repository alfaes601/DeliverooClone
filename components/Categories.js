import { View as ScrollView, Text } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={true}
      horizontal={true}
    >
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="Test 1" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="Test 2" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="Test 3" />
    </ScrollView>
  );
};

export default Categories;
