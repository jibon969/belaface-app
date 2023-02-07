import * as React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Text, StyleSheet, View} from 'react-native'
import {routes, screens} from './RouteItems'
import HomeStackNavigator from './stack-navigators/HomeStackNavigator'
import BrandStackNavigator from './stack-navigators/BrandStackNavigator'
import SearchStackNavigator from './stack-navigators/SearchStackNavigator'
import ProductListStackNavigator from './stack-navigators/ProductListStackNavigator'
import ProductDetailStackNavigator from './stack-navigators/ProductDetailStackNavigator'
import CallStackNavigator from './stack-navigators/CallStackNavigator'
import CartStackNavigator from './stack-navigators/CartStackNavigator'
import CheckoutStackNavigator from './stack-navigators/CheckoutStackNavigator'
import InvoiceStackNavigator from './stack-navigators/InvoiceStackNavigator'


// User Profile Stack
import UserProfileStackNavigator from './stack-navigators/UserProfileStackNavigator'
import PersonalInfoStackNavigator from './stack-navigators/PersonalInfoStackNavigator'
import PurchaseHistoryStackNavigator from './stack-navigators/PurchaseHistoryStackNavigator'
import ReturnPolicyStackNavigator from './stack-navigators/ReturnPolicyStackNavigator'
import SecurityPrivacyStackNavigator from './stack-navigators/SecurityPrivacyStackNavigator'
import TermsConditionStackNavigator from './stack-navigators/TermsConditionStackNavigator'
import AboutStackNavigator from './stack-navigators/AboutStackNavigator'
import ContactStackNavigator from './stack-navigators/ContactStackNavigator'
import SettingStackNavigator from './stack-navigators/SettingStackNavigator'

const Tab = createBottomTabNavigator();

const tabOptions = ({route}) => {
    const item = routes.find(routeItem => routeItem.name === route.name); // get the route config object

    if (!item.showInTab) {
        // hide this tab
        return {
            tabBarButton: () => <View style={{width: 0}}/>,
            headerShown: false,
            tabBarStyle: styles.tabContainer,
            title: item.title,
        }
    }

    return {
        tabBarIcon: ({focused}) => item.icon(focused),
        tabBarLabel: () => (
            <Text style={styles.tabBarLabel}>{item.title || ''}</Text>
        ),
        headerShown: false,
        tabBarStyle: styles.tabContainer,
        title: item.title,
    }
};

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={tabOptions}>
            <Tab.Screen name={screens.HomeStack} component={HomeStackNavigator}/>
            <Tab.Screen name={screens.BrandStack} component={BrandStackNavigator}/>
            <Tab.Screen name={screens.SearchStack} component={SearchStackNavigator}/>
            <Tab.Screen name={screens.ProductListStack} component={ProductListStackNavigator}/>
            <Tab.Screen name={screens.ProductDetailStack} component={ProductDetailStackNavigator}/>
            <Tab.Screen name={screens.CallStack} component={CallStackNavigator}/>
            <Tab.Screen name={screens.CartStack} component={CartStackNavigator}/>
            <Tab.Screen name={screens.CheckoutStack} component={CheckoutStackNavigator}/>
            <Tab.Screen name={screens.InvoiceStack} component={InvoiceStackNavigator}/>
            <Tab.Screen name={screens.UserProfileStack} component={UserProfileStackNavigator}/>
            <Tab.Screen name={screens.PersonalInfoStack} component={PersonalInfoStackNavigator}/>
            <Tab.Screen name={screens.PurchaseHistoryStack} component={PurchaseHistoryStackNavigator}/>
            <Tab.Screen name={screens.ReturnPolicyStack} component={ReturnPolicyStackNavigator}/>
            <Tab.Screen name={screens.SecurityPrivacyStack} component={SecurityPrivacyStackNavigator}/>
            <Tab.Screen name={screens.TermsConditionStack} component={TermsConditionStackNavigator}/>
            <Tab.Screen name={screens.AboutStack} component={AboutStackNavigator}/>
            <Tab.Screen name={screens.ContactStack} component={ContactStackNavigator}/>
            <Tab.Screen name={screens.SettingStack} component={SettingStackNavigator}/>
        </Tab.Navigator>
    )
};

const styles = StyleSheet.create({
    tabBarLabel: {
        color: '#292929',
        fontSize: 12,
    },
    tabContainer: {
        height: 60,
    }
});

export default BottomTabNavigator