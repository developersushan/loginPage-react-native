import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { colors } from '../../colors';
const Header = () => {
    const [focused,setFocused] = useState(false)
    const handleCart =()=>{
        setFocused((prev)=>!prev)
    }
    return (
        <View style={styles.headerContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputText} placeholder='Search........'/>
                <EvilIcons style={styles.iconInput} name={'search'} color={colors.secondary} size={30}/>
            </View>
            <View>
                <TouchableOpacity onPress={handleCart}>
                <Ionicons
                        name={focused ? 'cart' : 'cart-outline'}
                        size={24}
                        color={focused ? `${colors.orangeCustom}` : 'gray'}
                      />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        gap:5,
        alignItems:'center',
        padding:10,
        shadowColor:colors.secondary,
        shadowOffset:{
            width:0,
            height:15,
        },
        shadowOpacity:0.5,
        elevation:1
        
    },
    inputContainer:{
        borderWidth:0.5,
        borderColor:colors.secondary,
        flexDirection:'row',
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:5,
        borderRadius:100
        
    },
    inputText:{
        flex:1,
    },
    iconInput:{

    }
})

export default Header;
