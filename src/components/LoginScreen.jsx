import React, {  useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../colors';
import { useNavigation } from '@react-navigation/native';
import Helper from '../utils/Helper';
import axios from 'axios';
const LoginScreen = () => {
    const [usr,setEmail] = useState('');
    const [pwd,setPassword] = useState('');
    const [errorMessage,setErrorMessage] = useState('');
    const navigation = useNavigation();
    const [secureTextOpen,setSecureText] = useState(true);
    const handleBack = () =>{
        navigation.goBack();
    };
    const handleSignUp = () => {
        navigation.navigate('SignUp');
    };
    {/*Login handle*/}

    const handleLogin = () =>{
        if(!usr || !pwd){
            setErrorMessage('Email and password are required');
            return;
        }
        setErrorMessage('');
        loginApi();
        // navigation.navigate('App');

    };

    const loginApi = async () => {
        try {
          const response = await axios.post(`${Helper.API_BASE}`, {
            usr,
            pwd,
          });
          if(response.data){
              navigation.navigate('App');
              console.log('Login successful:', response.data);
          }
        } catch (error) {
          if (error.response) {
            setErrorMessage(error.response.data.message || 'Login failed.');
          } else {
            setErrorMessage('An error occurred. Please try again.');
          }
        }
      };
    const handleForget = () =>{
        console.log('forget password');
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleBack} style={styles.backButtonWrapper}>
            <Ionicons  name={'arrow-back-outline'} color={colors.primary} size={25} />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.textHead}>Hey,</Text>
                <Text style={styles.textHead}>Welcome</Text>
                <Text style={styles.textHead}>Back</Text>
            </View>
            {/*from container*/}
            <View style={styles.fromContainer}>
                <View style={styles.inputContainer}>
                    <Ionicons style={styles.iconInput} name={'mail-outline'} color={colors.secondary} size={20}/>
                    <TextInput value={usr} onChangeText={setEmail} style={styles.textInput} placeholder='Enter your email' keyboardType='email-address'/>
                </View>
                <View style={styles.inputContainer}>
                    <SimpleLineIcons style={styles.iconInput} name={'lock'} color={colors.secondary} size={20}/>
                    <TextInput value={pwd} onChangeText={setPassword} style={styles.textInput} placeholder='Enter your password' 
                    secureTextEntry={secureTextOpen}
                    />
                    <TouchableOpacity onPress={()=> setSecureText((prev)=> !prev)}>
                    <SimpleLineIcons style={styles.iconInput} name={'eye'} color={colors.secondary} size={20}/>
                    </TouchableOpacity>
                </View>
                {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
                <TouchableOpacity onPress={handleForget}>
                <Text  style={styles.forgetPasswordText}> Forget password!</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.continueText}>or continue with</Text>
                <TouchableOpacity style={styles.googleButton}>
                    <Image style={styles.googleImage} source={require('../assets/Vector.png')} />
                    <Text style={styles.googleText}>Google</Text>
                </TouchableOpacity>
                <View style={styles.footerContainer}>
                    <Text style={styles.accountText}>Don't have an account<AntDesign name={'question'} size={14}/></Text>
                    <TouchableOpacity onPress={handleSignUp}>
                    <Text style={styles.signUp}>signUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        flex:1,
        padding:20,
    },
    backButtonWrapper:{
        width:40,
        height:40,
        backgroundColor:colors.gray,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
    },
    textContainer:{
        marginTop:20,
    },
    textHead:{
        fontSize:32,
        fontWeight:600,
        color:colors.primary,
    },
    fromContainer:{
        marginTop:30,
    },
    inputContainer:{
        borderWidth:0.5,
        borderRadius:100,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        marginVertical:15,
        padding:2,
    },
    textInput:{
        flex:1,
        paddingHorizontal:10,
        fontWeight:300,
        color:colors.primary,
    },
    errorText:{
        color:'red',
        fontSize:12,
    },
    forgetPasswordText:{
        textAlign:'right',
        marginVertical:10,
        fontSize:14,
    },
    loginButton:{
        backgroundColor:colors.primary,
        paddingVertical:10,
        marginVertical:20,
        borderRadius:100,
    },
    loginText:{
        color:colors.white,
        textAlign:'center',
        fontSize:20,
        fontWeight:600,
        padding:5,
    },
    continueText:{
        textAlign:'center',
        marginVertical:10,
        fontSize:14,
        color:colors.primary,
    },
    googleButton:{
        flexDirection:'row',
        borderWidth:2,
        borderColor:colors.primary,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        gap:10,
        borderRadius:100,
        marginVertical:10,
    },
    googleImage:{
        width:20,
        height:20,
    },
    googleText:{
        fontSize:20,
        fontWeight:500,
    },
    footerContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:2,
        marginVertical:20,
    },
    accountText:{
        fontSize:14,
    },
    signUp:{
        fontSize:16,
        fontWeight:600,
    },
});

export default LoginScreen;
