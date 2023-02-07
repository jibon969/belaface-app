import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import ProductListScreen from '../../screens/ProductListScreen'
import {FontAwesome} from "@expo/vector-icons";
import {Ionicons} from '@expo/vector-icons';

const Stack = createStackNavigator();

const ProductListByCategoryStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={({navigation}) => ({
            headerShown: true,
            headerTintColor: '#ffffff',
            headerStyle: {
                backgroundColor: '#551E18',
                height: 50
            },
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.pop(1)} style={styles.headerLeft}>
                    <Ionicons name="arrow-back-outline" size={25} color="#fff" style={{padding: 5}}/>
                </TouchableOpacity>
            ),
            headerRight: () => (
                <View style={styles.headerRight}>
                    <View style={styles.headerContent}>
                        <Text style={styles.headerSearchIcon}>
                            <TouchableOpacity onPress={()=> navigation.navigate("SearchStack")}>
                                <FontAwesome name="search" size={20} color="#fff"/>
                            </TouchableOpacity>
                        </Text>
                        <Text style={styles.headerSearchIcon}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('UserProfileStack')}>
                                <FontAwesome name="user" size={20} color="#fff"/>
                            </TouchableOpacity>
                        </Text>
                    </View>
                </View>
            ),
        })}>
            <Stack.Screen
                name="ProductList"
                component={ProductListScreen}
                options={({navigation, route}) => ({
                    title: "Products",
                    headerTitleAlign: 'left',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerLeft}>
                            <Ionicons name="arrow-back-outline" size={25} color="#fff" style={{padding: 5}}/>
                        </TouchableOpacity>
                    ),

                })}
            />
        </Stack.Navigator>
    )
};

const styles = StyleSheet.create({
    // Troggle
    headerLeft: {
        marginLeft: 10,
    },
    // User Icon & Search
    headerRight: {
        marginRight: 20,
    },
    headerContent: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    headerSearchIcon: {
        marginLeft: 30,
    },
    headerUserIcon: {
        marginLeft: 20
    }

});

export default ProductListByCategoryStackNavigator;