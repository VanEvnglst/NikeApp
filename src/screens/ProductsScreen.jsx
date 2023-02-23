import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'
import products from "../data/products";

const ProductsScreen =({ navigation }) => {
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={({ item}) => (
        <View
          style={styles.container}
        >
          <Image
            source={{ uri: item.image }}
            style={styles.image}
          />
        </View>
      )}
      numColumns={2}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 1,
    width: '50%'
  },
  image: {
    width: '100%',
    aspectRatio: 1
  }
})

export default ProductsScreen;