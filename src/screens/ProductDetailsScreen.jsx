import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native";

const ProductDetailsScreen = ({ product }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ flex: 1 }}>
    <ScrollView
      style={{ marginBottom: 80 }}
    >
      <FlatList
        data={product.images}
        renderItem={({ item }) => (
          <View>
            <Image
              source={{ uri: item }}
              style={[styles.carouselImage, { width }]}
            />
          </View>
        )}
        style={{ paddingTop: 20 }}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      <View style={{ padding: 20 }}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
      </ScrollView>
      <Pressable
        style={styles.addToCartButton}
      >
        <Text style={styles.buttonText}>
          Add To Cart
        </Text>
      </Pressable>
      </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  carouselImage: {
    aspectRatio: 1,
  },
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
  },
  addToCartButton: {
    backgroundColor: 'black',
  position: 'absolute',
  bottom: 30,
  width: '90%',
  alignSelf: 'center',
  alignItems: 'center',
  padding: 20,
  borderRadius: 100,
},
buttonText: {
  color: 'white',
  fontWeight: '500',
  fontSize: 16,
},
});
