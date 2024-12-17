import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { CarouselData } from '../../utils/SliderData';
import { colors } from '../../colors';

const HomeBanner = () => {
    const [activeIndex,setActiveIndex] = useState(0)
    const flatlistRef = useRef()
    const screenWidth = Dimensions.get('window').width
    const renderItem = ({item}) =>{
        return(
            <View key={item.id}>
                <Image source={item.image} style={{height:200,width:screenWidth}} />
            </View>
        )
    }
    	// Auto Scroll
	useEffect(() => {
		let interval = setInterval(() => {
			if (activeIndex === CarouselData.length - 1) {
				flatlistRef.current.scrollToIndex({
					index: 0,
					animation: true,
				});
			} else {
				flatlistRef.current.scrollToIndex({
					index: activeIndex + 1,
					animation: true,
				});
			}
		}, 4000);
		return () => clearInterval(interval);
	});
    const getItemLayout = (data, index) => ({
		length: screenWidth,
		offset: screenWidth * index, 
		index: index,
	});
    const handleScroll =(event)=>{
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / screenWidth);
        setActiveIndex(index)
    }
    const renderDotIndicators =()=>{
        return CarouselData.map((dot,index)=>(
            <View key={index} style={{
                height:8,
                width:8,
                backgroundColor: activeIndex===index ? 'orange': colors.secondary ,
                borderRadius:5
            }}></View>
        ));
    }

    return (
        <View>
            <FlatList 
            data={CarouselData}
            renderItem={renderItem}
            ref={flatlistRef}
            getItemLayout={getItemLayout}
            horizontal={true}
            pagingEnabled={true}
            keyExtractor={(item)=>item.id}
            onScroll={handleScroll}
            />
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
                marginTop:5,
                gap:5
            }}>
                {renderDotIndicators()}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerText:{
        fontSize:20,
    },
})

export default HomeBanner;
