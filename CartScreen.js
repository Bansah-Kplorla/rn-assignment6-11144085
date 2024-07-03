import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CartContext } from '../context/CartContext';

const CartScreen = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

    const renderItem = ({ item }) => (
        <View style={styles.cartItem}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.itemDetails}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <TouchableOpacity onPress={() => removeFromCart(item)}>
                    <Image source={require('../assets/remove.png')} style={styles.remove} />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.checkout}>CHECKOUT</Text>
            <Image source={require('../assets/line.png')} style={styles.line} />
            <FlatList
                data={cartItems}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.cartList}
            />
            <Text style={styles.total}>EST. TOTAL</Text>
            <Text style={styles.totalPrice}>$240{totalPrice.toFixed(2)}</Text>
            <View style={styles.footer}>
                <Ionicons name="bag-outline" size={30} color="red" style={styles.bag} />
                <Text style={styles.footerText}>CHECKOUT</Text>
            </View>
        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingTop: 20,
    },
    cartItem: {
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: '#f9f9f9',
        padding: 10,
        borderRadius: 5,
    },
    itemDetails: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
    cartList: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 14,
        color: 'red',
        paddingTop: 5,
        fontWeight: 'bold',
    },
    remove: {
        width: 24,
        height: 24,
    },
    checkout: {
        fontSize: 24,
        alignSelf: 'center',
        marginBottom: 10,
    },
    total: {
        fontSize: 20,
        alignSelf: 'flex-start',
        marginTop: 10,
    },
    totalPrice: {
        color: 'red',
        fontSize: 20,
        alignSelf: 'flex-end',
    },
    footer: {
        width: '100%',
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        position: 'absolute',
        bottom: 0,
    },
    footerText: {
        color: '#fff',
        fontSize: 24,
        marginLeft: 10,
    },
    bag: {
        color: '#fff',
    },
    line: {
        alignSelf: 'center',
        marginVertical: 10,
    },
});
