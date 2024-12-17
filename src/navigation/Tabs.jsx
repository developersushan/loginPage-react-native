import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Offer from '../components/Offer/Offer';
import Cart from '../components/Cart/Cart';
import Profile from '../components/Profile/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../components/Home/Home';
import { colors } from '../colors';
const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <Tab.Navigator  screenOptions={{ tabBarShowLabel:false}} >
            <Tab.Screen name='Home' component={Home} options={{
                headerShown:false,
                tabBarIcon: ({ focused, color, size }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                      <Ionicons
                        name={focused ? 'home' : 'home-outline'}
                        size={24}
                        color={focused ? `${colors.orangeCustom}` : 'gray'}
                      />
                      <Text style={{ color: focused ? `${colors.orangeCustom}`: 'gray', fontSize: 11, fontWeight:500 }}>
                        Home
                      </Text>
                    </View>
                  ),
                }}  />
            <Tab.Screen name='Offer' options={{
                headerShown:false,
                tabBarIcon: ({ focused, color, size }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                      <Ionicons
                        name={focused ? 'pricetag' : 'pricetag-outline'}
                        size={24}
                        color={focused ? `${colors.orangeCustom}` : 'gray'}
                      />
                      <Text style={{ color: focused ? `${colors.orangeCustom}` : 'gray', fontSize: 11, fontWeight:500 }}>
                        Offer
                      </Text>
                    </View>
                  ),
            }} component={Offer} />
            <Tab.Screen name='Cart' options={{
                headerShown:false,
                tabBarIcon: ({ focused, color, size }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                      <Ionicons
                        name={focused ? 'cart' : 'cart-outline'}
                        size={24}
                        color={focused ? `${colors.orangeCustom}`: 'gray'}
                      />
                      <Text style={{ color: focused ? `${colors.orangeCustom}` : 'gray', fontSize: 11, fontWeight:500 }}>
                        Cart
                      </Text>
                    </View>
                  ),
                }} component={Cart} />
            <Tab.Screen name='My Account' options={{
                headerShown:false,
                tabBarIcon: ({ focused, color, size }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                      <Ionicons
                        name={focused ? 'person' : 'person-outline'}
                        size={24}
                        color={focused ? `${colors.orangeCustom}`: 'gray'}
                      />
                      <Text style={{ color: focused ? `${colors.orangeCustom}`: 'gray', fontSize: 10, fontWeight:500 }}>
                        Profile
                      </Text>
                    </View>
                  ),
                }} component={Profile} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
  NavigationContainer:{
    backgroundColor:'red',
    position:'absolute',
    bottom:25,
    elevation:0,
    height:0,
  }
})

export default Tabs;
