import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../colors';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
    const navigation = useNavigation();
    const handleLogin = () =>{
        navigation.navigate('Login');
    };
    const handleSignUp = () => {
        navigation.navigate('SignUp');
    };
    return (
        <View style={styles.container}>
            <Image source={require('../assets/Logo.png')} style={styles.logoImg} />
            <Image source={require('../assets/Image.png')} style={styles.bannerImg}/>
            <View style={styles.cardBody}>
            <Text style={styles.titleText}> Lorem, ipsum dolor sit </Text>
            <Text style={styles.TextDescription}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum sed iusto ea expedita architecto praesentium? Laborum, commodi ipsa nisi, incidunt, deleniti numquam similique vel enim fugit esse non error consequatur!</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[
                    styles.loginWrapper,
                    { backgroundColor:colors.primary}]}
                    onPress={handleLogin}
                    >
                    <Text style={styles.btnLoginText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSignUp} style={[styles.loginWrapper]}>
                    <Text style={styles.btnSignUpText}>Sign-Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create( {
    container:{
        flex:1,
        alignItems:'center',
    },
    logoImg:{
        width:150,
        height:50,
        marginVertical:30,
    },
    bannerImg:{
        width:231,
        height:250,
        marginVertical:30,
    },
    cardBody:{
        width:292,
    },
    titleText:{
        fontSize:36,
        fontWeight:600,
        lineHeight:54,
        textAlign:'center',
        marginTop:20,

    },
    TextDescription:{
        textAlign:'center',
        marginVertical:20,
        fontSize:14,
        color:colors.secondary,
    },
    buttonContainer:{
        flexDirection:'row',
        gap:20,
        borderWidth:2,
        width:'80%',
        height:60,
        borderRadius:98,
    },
    loginWrapper:{
        justifyContent:'center',
        alignItems:'center',
        width:'50%',
        borderRadius:98,
    },
    btnLoginText:{
        fontSize:20,
        color:colors.white,
        fontWeight:600,
    },
    btnSignUpText:{
        fontSize:20,
        fontWeight:600,
    },
} );

export default HomeScreen;
