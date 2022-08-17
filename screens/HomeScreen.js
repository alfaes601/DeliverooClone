import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver now!</Text>
          <Text className="text-bold text-xl">
            Current location
            <ChevronDownIcon size={20} color="#00CCBB"></ChevronDownIcon>
          </Text>
        </View>

        <UserIcon size={30} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <SearchIcon />
          <TextInput
            placeholder="Restaurant and cousines"
            keyboardType="twitter"
          />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView>
        {/* Categories */}
        <Categories />
        {/* Feautured rows */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
