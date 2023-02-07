import React from 'react'
import {Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {FontAwesome} from "@expo/vector-icons";
import {Ionicons} from '@expo/vector-icons';
import SearchProduct from "../../screens/SearchProduct";

const Stack = createStackNavigator();

const SearchStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={({navigation}) => ({
            headerShown: true,
            headerTintColor: '#ffffff',
            headerStyle: {
                backgroundColor: '#551E18',
                height: 50
            },
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-outline" size={30} color="#fff" style={{marginLeft: 10}}/>
                </TouchableOpacity>
            ),
            headerRight: () => (
                <View style={styles.headerRight}>
                    <View style={styles.mainSearchWrap}>
                        <View style={styles.mainSearch}>
                            <TextInput
                                name="search_product"
                                placeholder="Search Product or Brand Name"
                                style={styles.mainSearchInput}
                                selectionColor="#183153"
                            />
                            <View style={styles.mainSearchIcon}>
                                <TouchableOpacity style={styles.searchIcon}>
                                    <FontAwesome name="search" size={22} color="white"/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            ),
        })}>
            <Stack.Screen
                name="SearchProduct"
                component={SearchProduct}
                options={{
                    title: ""
                }}
            />
        </Stack.Navigator>
    )
};

const styles = StyleSheet.create({
    // Troggle
    headerLeft: {
        marginLeft: 15,
    },
    // User Icon & Search
    headerRight: {
        flexDirection: "row",
        flexWrap: "wrap",
        ...Platform.select({
            ios: {
                width: "160%",
            },
            android: {
                width: "100%",
            }
        }),
    },

    headerContent: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        marginRight: 5
    },
    headerSearchIcon: {
        marginLeft: 2,
        backgroundColor: "#fff",
        padding: 2,
        borderRadius: 5
    },
    headerUserIcon: {
        marginLeft: 15
    },
    checkoutAddressNoteForm: {
        height: 60,
        marginLeft: 2,
        marginRight: 3,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: "#D9D9D9",
        marginBottom: 10,
        color: "#fff"
    },
    mainSearchWrap: {
        width: "100%"
    },
    mainSearch: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: 'gray',
        height: 35,
        borderRadius: 10,
        marginLeft: -15,
        marginRight: 5,
        marginBottom: 5,
        textAlign: 'center',

    },
    mainSearchInput: {
        flex: 1,
        shadowColor: '#FFF',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        marginLeft: 10,
        marginTop: 0,


    },
    mainSearchIcon: {
        width: 50,
    },
    searchIcon: {
        marginRight: 10,
        width: 50,
        height: 35,
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
        overflow: "hidden",
        backgroundColor: '#551E18',
        borderWidth: 0.4,
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    }

});

export default SearchStackNavigator;