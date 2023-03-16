import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import cart from '../data/cart';
import CartListItem from '../components/CartListItem';

const ShoppingCart = () => {

  return (
    <FlatList
      data={cart}
      renderItem={({ item }) => <CartListItem cartItem={item} />}
      ListFooterComponent={() => (
        <View style={StyleSheet.totalsContainer}>
          <View style={styles.row}>
            <Text style={styles.text}>Subtotal</Text>
            <Text style={styles.text}>Subtotal</Text>
          </View>
          <View style={styles.row}>
          <Text style={styles.text}>Subtotal</Text>
          <Text style={styles.text}>Subtotal</Text>
          </View>
          <View style={styles.row}>
          <Text style={styles.textBold}>Subtotal</Text>
          <Text style={styles.textBold}>Subtotal</Text>
          </View>
        </View>
      )}
    />
  )
}

export default ShoppingCart;

const styles = StyleSheet.create({
totalsContainer: {
  margin: 20,
  paddingTop: 10,
  borderColor: 'gainsboro',
  borderTopWidth: 1
},
row: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginVertical: 2
},
text: {
  fontSize: 16,
  color: 'gray'
},
textBold: {
  fontSize: 16,
  fontWeight: '500'
}
});