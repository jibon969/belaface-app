import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity, Platform} from 'react-native'
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import {FontAwesome} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome'
import {AntDesign} from '@expo/vector-icons';
import BottomTabNavigator from './BottomTabNavigator'
import {routes, screens} from './RouteItems'
import {useDrawerStatus} from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
    const currentRouteName = props.nav()?.getCurrentRoute()?.name;
    const isDrawerOpen = useDrawerStatus() === 'open';

    const [nestedPerfumeDrawerItem, setNestedPerfumeDrawerItem] = useState(false);
    const [perfumeFocus, setPerfumeFocus] = useState(false);

    useEffect(() => {
        if (isDrawerOpen === false) {
            setNestedPerfumeDrawerItem(false)
        }
    }, [isDrawerOpen]);

    // Nested Perfume Focus
    const nestedPerfumeDrawerItemFUN = () => {
        if (nestedPerfumeDrawerItem === true) {
            setNestedPerfumeDrawerItem(false)
        } else {
            setNestedPerfumeDrawerItem(true)
        }
    };

    return (
        <DrawerContentScrollView {...props}>
            {/*Home*/}
            <DrawerItem
                key='Home'
                label={() => (
                    <View style={{flexDirection: "row"}}>
                        <AntDesign name="leftcircleo" size={20} color="#FFF"/>
                        {/*<Image source={require('../assets/headerLogo.png')}*/}
                        {/*style={{width: "80%", height: 20, marginLeft: 20}}/>*/}
                        <Text style={{marginLeft: 15, fontSize: 15, color: "#fff"}}>Belaface</Text>
                    </View>
                )}
                onPress={() => props.navigation.navigate('Home')}
                style={styles.drawerItem2}
            />

            {/*Offer*/}
            <DrawerItem onPress={() => props.navigation.navigate('ProductListStack')}
                label={() => (
                    <Text style={styles.drawerLabel2}>
                        Offers
                    </Text>
                )}
                style={styles.drawerItem2}
            />

            {/*Start Perfume*/}
            <DrawerItem
                key='Perfume'
                label={() => (
                    <View>
                        <View style={{flexDirection: 'row'}}>
                            <Text
                                style={[perfumeFocus ? styles.drawerLabelFocused : styles.drawerLabel, {color: '#FFF'}]}>
                                Perfume
                            </Text>
                            {
                                nestedPerfumeDrawerItem === true
                                    ? <AntDesign name="minus" size={24} color={perfumeFocus ? '#FFF' : '#FFF'}/>
                                    : <AntDesign name="plus" size={24} color={perfumeFocus ? '#FFF' : '#FFF'}/>
                            }
                        </View>
                    </View>
                )}
                onPress={() => {
                    setPerfumeFocus(true);
                    nestedPerfumeDrawerItemFUN()
                }}
                style={perfumeFocus ? styles.drawerItemFocused : styles.drawerItem}
            />

            <View style={styles.drawerNestedItemContainer}>
                {/*Perfume : All Perfume */}
                {nestedPerfumeDrawerItem && (
                    <DrawerItem
                        key='AllPerfume'
                        label={() => (
                            <Text style={styles.drawerLabel}>
                                All Perfume
                            </Text>
                        )}
                    />
                )}
                {/*Women : 'perfume/woman' */}
                {nestedPerfumeDrawerItem && (
                    <DrawerItem
                        key='Woman'
                        label={() => (
                            <Text style={styles.drawerLabel}>
                                Women
                            </Text>
                        )}
                    />
                )}

                {/*Men : 'perfume/men' */}
                {nestedPerfumeDrawerItem && (
                    <DrawerItem
                        key='Men'
                        label={() => (
                            <Text style={styles.drawerLabel}>
                                Men
                            </Text>
                        )}

                    />
                )}
            </View>
            {/*/End Perfume*/}
        </DrawerContentScrollView>
    )
};

const DrawerNavigator = ({nav}) => {

    const isHamburgerMenuShow = () => {
        let flag = false;
        let route_name = nav()?.getCurrentRoute()?.name;

        if (typeof (route_name) === "undefined") {
            return flag = true
        }
        if (route_name === 'Home' || route_name === 'Welcome') {
            return flag = true
        } else if (route_name !== 'Home') {
            return flag = false
        }

        return flag
    };

    return (
        <Drawer.Navigator
            screenOptions={({navigation}) => ({
                headerStyle: {
                    backgroundColor: "#551E18",
                    ...Platform.select({
                        ios: {
                            height: 50,
                        },
                        android: {
                            height: 50,
                        }
                    })
                },
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.headerLeft}>
                        <Icon name="bars" size={26} color="#fff"/>
                    </TouchableOpacity>
                ),
            })}

            drawerContent={(props) => <CustomDrawerContent {...props} nav={nav}/>}>

            {/*HomeScreen headerShown: false > screen off*/}
            <Drawer.Screen name={screens.HomeTab} component={BottomTabNavigator} options={({navigation}) => ({
                title: 'Home',
                headerTitle: () =>
                    <View>
                        <Text>Belaface</Text>
                    </View>,
                headerRight: () => (
                    <View style={styles.headerRight}>
                        {/*Search Icon*/}
                        <View style={{flexDirection: "row"}}>
                            <TouchableOpacity style={[styles.headerLeft, styles.touchableButton]}>
                                <FontAwesome name="search" size={20} color="#fff" style={{margin: 10}}/>
                            </TouchableOpacity>
                            {/*User Profile Icon*/}
                            <TouchableOpacity onPress={() => navigation.navigate('UserProfileStack')}>
                                <FontAwesome name="user" size={20} color="#fff" style={{margin: 10}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                ),
                headerShown: false

            })}/>
        </Drawer.Navigator>
    )
};

const styles = StyleSheet.create({
    headerLeft: {
        marginLeft: 15,
    },
    headerTitle: {
        backgroundColor: "orange"
    },
    headerImage: {
        ...Platform.select({
            ios: {
                width: 150,
                height: 20,
            },
            android: {
                width: 150,
                height: 20,
            }
        })
    },

    headerRight: {
        marginRight: 15,
    },

    drawerLabel: {
        fontSize: 14,
        width: "100%",
    },
    drawerLabel2: {
        fontSize: 14,
        width: "100%",
        color: "#FFF",
        backgroundColor: "#551E18",
    },

    drawerLabelFocused: {
        fontSize: 14,
        fontWeight: '500',
        width: "100%",
        color: "#FFF",
    },
    drawerItem: {
        height: 50,
        justifyCenter: "center",
        backgroundColor: "#551E18",
        color: "#FFF"

    },
    drawerItem2: {
        backgroundColor: "#551E18",
        color: "#FFF"
    },

    drawerItemFocused: {
        backgroundColor: "#551E18",
        color: "#FFF"
    },
    white: {
        color: 'white',
    },
    drawerNestedItemContainer: {
        marginLeft: 20
    },
    touchableButton: {
        borderRadius: 50,
        backgroundColor: "#551E18",
        overflow: "hidden",
    }
});

export default DrawerNavigator