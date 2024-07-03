// CartContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        loadCartItems();
    }, []);

    const loadCartItems = async () => {
        try {
            const cartItemsString = await AsyncStorage.getItem('cartproducts');
            if (cartItemsString) {
                setCartItems(JSON.parse(cartItemsString));
            }
        } catch (error) {
            console.error('Error loading cart items:', error);
        }
    };

    const saveCartItems = async (items) => {
        try {
            await AsyncStorage.setItem('cartproducts', JSON.stringify(items));
        } catch (error) {
            console.error('Error saving cart items:', error);
        }
    };

    const addToCart = (item) => {
        const updatedCartItems = [...cartItems, item];
        setCartItems(updatedCartItems);
        saveCartItems(updatedCartItems);
    };

    const removeFromCart = async (item) => {
        const updatedCartItems = cartItems.filter((i) => i.id !== item.id);
        setCartItems(updatedCartItems);
        saveCartItems(updatedCartItems);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };