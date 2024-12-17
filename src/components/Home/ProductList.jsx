import axios from 'axios';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Helper from '../../utils/Helper';

const ProductList = () => {

    const handleProduct =async()=>{
        try {
            const response = await axios.get(`${Helper.API_BASE_PRODUCT}`)
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching product data',error)
        }
    }
    return (
        <View>
            <TouchableOpacity onPress={handleProduct}>
            <Text>product</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ProductList;
