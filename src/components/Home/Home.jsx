import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Header from './Header';
import HomeBanner from './HomeBanner';
import CategoriesItem from './CategoriesItem';
import ProductList from './ProductList';

const Home = () => {
    return (
        <View>
            <SafeAreaView>
                <Header/>
                <HomeBanner/>
                <CategoriesItem/>
                <ProductList/>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Home;
