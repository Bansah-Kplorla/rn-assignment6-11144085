import React, { useState, useEffect,useContext } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CartContext } from '../context/CartContext';

const productsData = [
    {
        id: 1,
        image: require("../assets/dress1.png"),
        title: "Office Wear",
        description: "reversible angora cardigan",
        price: 120,
    },
    {
        id: 2,
        image: require("../assets/dress2.png"),
        title: "Black",
        description: "reversible angora cardigan",
        price: 120,
    },
    {
        id: 3,
        image: require("../assets/dress3.png"),
        title: "Church Wear",
        description: "reversible angora cardigan",
        price: 120,
    },
    {
        id: 4,
        image: require("../assets/dress4.png"),
        title: "Lamerei",
        description: "reversible angora cardigan",
        price: 120,
    },
    {
        id: 5,
        image: require("../assets/dress5.png"),
        title: "21WN",
        description: "reversible angora cardigan",
        price: 120,
    },
    {
        id: 6,
        image: require("../assets/dress6.png"),
        title: "Lopo",
        description: "reversible angora cardigan",
        price: 120,
    },
    {
        id: 7,
        image: require("../assets/dress7.png"),
        title: "21WN",
        description: "reversible angora cardigan",
        price: 120,
    },
];

const HomeScreen = () => {
    const { addToCart } = useContext(CartContext);

    const renderItem = ({ item }) => (
        <View style={styles.productCard}>
            <ProductCard
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
                addCart={() => addToCart(item)}
            />
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.Category}>
                <Text style={styles.story}>OUR STORY</Text>
                <Ionicons name="list-outline" size={30} color="black" style={styles.list} />
                <Ionicons name="filter-outline" size={30} color="red" style={styles.filter} />
            </View>
            <FlatList
                data={productsData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString() || index.toString()}
                contentContainerStyle={[styles.productList, { flexWrap: 'wrap', flexDirection: 'row' }]}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    productCard: {
        width: '50%',
        padding: 8,
    },
    Category: {
        flexDirection: 'row',
    },
    story: {
        fontSize: 20,
        right: 105,
        fontWeight: 'bold',
    },
    list: {
        left: 110,
    },
    filter: {
        left: 120,
    },
    productList: {
        alignItems: 'center',
        paddingHorizontal: 20,
        left: 20,
    },
});