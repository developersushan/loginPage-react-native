import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { CategoriesData } from '../../utils/CategoriesData';

const CategoriesItem = () => {
    const renderItem=({item})=>{
        return(
            <View style={{paddingHorizontal:20,justifyContent:'center',alignItems:'center'}}>
                <Image source={item.img} style={{height:50, width:50}}/>
                <Text style={{marginTop:10}}>{item.title}</Text>
            </View>
        )
    }
    return (
        <View style={{
            marginTop:30
        }}>
            <FlatList horizontal={true}  data={CategoriesData} renderItem={renderItem}/>
            
        </View>
    );
}

const styles = StyleSheet.create({})

export default CategoriesItem;
