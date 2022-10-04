import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="shadow-sm bg-white mr-2">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="w-20 h-20 rounded"
      />
      <Text className="text-center mt-2 text-black font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
