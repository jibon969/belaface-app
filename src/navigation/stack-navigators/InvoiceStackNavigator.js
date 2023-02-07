import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import InvoiceScreen from '../../screens/InvoiceScreen'
import {FontAwesome, Ionicons} from "@expo/vector-icons";
const Stack = createStackNavigator();


const InvoiceStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={({navigation}) => ({
            headerShown: true,
            headerTintColor: '#ffffff',
            headerStyle: {
                backgroundColor: '#551E18',
                height: 50
            },
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerLeft}>
                    <Ionicons name="arrow-back-outline" size={25} color="#fff" style={{padding: 5}}/>
                </TouchableOpacity>
            ),
            headerRight: () => (
                <View style={styles.headerRight}>
                    <View style={styles.headerContent}>
                        <Text style={styles.headerSearchIcon}>
                            <TouchableOpacity onPress={()=> navigation.navigate("SearchStack")} style={styles.touchableButton}>
                                <FontAwesome name="search" size={20} color="#fff"/>
                            </TouchableOpacity>
                        </Text>
                        <Text style={styles.headerSearchIcon}>
                            <TouchableOpacity style={styles.touchableButton} onPress={()=>navigation.navigate('UserProfileStack')}>
                                <FontAwesome name="user" size={20} color="#fff"/>
                            </TouchableOpacity>
                        </Text>
                    </View>
                </View>
            ),
        })}>
            <Stack.Screen
                name="Invoice"
                options={{
                    title: "Invoice",
                    headerTitleAlign: 'left',
                }}
                component={InvoiceScreen}
            />
        </Stack.Navigator>
    )
};


const styles = StyleSheet.create({
    headerLeft: {
        marginLeft: 10,
    },
    // User Icon & Search
    headerRight: {
        marginRight: 15,
    },
    headerContent: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    headerSearchIcon: {
        marginLeft: 20,
    },
    headerUserIcon: {
        marginLeft: 20
    },
    touchableButton:{
        backgroundColor: "#551E18",
        overflow: "hidden",
        paddingLeft:5,
        paddingRight:5,
        paddingTop:3,
        padding:3,
        borderRadius:50
    }
});
export default InvoiceStackNavigator