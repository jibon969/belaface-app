import * as React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {FontAwesome} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export const screens = {
    HomeTab: 'HomeTab',
    HomeStack: 'HomeStack',
    Home: 'Home',

    BrandStack: 'BrandStack',
    Brand: 'Brand',

    SearchStack: 'SearchStack',
    Search: 'Search',

    ProductListStack: 'ProductListStack',
    ProductList: 'ProductList',

    ProductDetailStack: 'ProductDetailStack',
    ProductDetail: 'ProductDetail',

    CartStack: 'CartStack',
    Cart: 'Cart',

    CheckoutStack: 'CheckoutStack',
    Checkout: 'Checkout',

    InvoiceStack: 'InvoiceStack',
    Invoice: 'Invoice',

    CallStack: 'CallStack',
    Call: 'Call',

    UserProfileStack: 'UserProfileStack',
    UserProfile: 'UserProfile',

    PersonalInfoStack: 'PersonalInfoStack',
    PersonalInfo: 'PersonalInfo',

    PurchaseHistoryStack: 'PurchaseHistoryStack',
    PurchaseHistory: 'PurchaseHistory',

    SecurityPrivacyStack: 'SecurityPrivacyStack',
    SecurityPrivacy: 'SecurityPrivacy',

    TermsConditionStack: 'TermsConditionStack',
    TermsCondition: 'TermsCondition',

    ReturnPolicyStack: 'ReturnPolicyStack',
    ReturnPolicy: 'ReturnPolicy',

    AboutStack: 'AboutStack',
    About: 'About',

    ContactStack: 'ContactStack',
    Contact: 'Contact',

    SettingStack: 'SettingStack',
    Setting: 'Setting',


};

export const routes = [

    {
        name: screens.HomeTab,
        focusedRoute: screens.HomeTab,
        title: 'Home',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name="home" size={30} color={focused ? '#551E18' : '#000'}/>,
    },
    {
        name: screens.HomeStack,
        focusedRoute: screens.HomeStack,
        title: 'Home',
        showInTab: true,
        showInDrawer: true,
        icon: (focused) =>
            <Icon name="home" size={30} color={focused ? '#551E18' : '#000'}/>,
    },
    {
        name: screens.Home,
        focusedRoute: screens.HomeStack,
        title: 'Home',
        showInTab: true,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name="home" size={30} color={focused ? '#551E18' : '#000'}/>,
    },

    // Brand ==================================================
    {
        name: screens.BrandStack,
        focusedRoute: screens.BrandStack,
        title: 'Brands',
        showInTab: true,
        showInDrawer: false,
        icon: (focused) =>
            <Ionicons name="grid-sharp" size={focused ? 20 : 20} color={focused ? 'black' : '#969696'}/>,
    },
    {
        name: screens.Brand,
        focusedRoute: screens.BrandStack,
        title: 'Brands',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <Ionicons name="grid-sharp" size={focused ? 20 : 20} color={focused ? 'black' : '#969696'}/>,
    },

    // SearchStack ==================================================
    {
        name: screens.SearchStack,
        focusedRoute: screens.SearchStack,
        title: 'Search',
        showInTab: false,
        showInDrawer: false
    },
    {
        name: screens.Search,
        focusedRoute: screens.SearchStack,
        title: 'Search',
        showInTab: false,
        showInDrawer: false,
    },

    // ProductList Stack ==================================================
    {
        name: screens.ProductListStack,
        focusedRoute: screens.ProductListStack,
        title: 'ProductList',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <Ionicons name="grid-sharp" size={focused ? 20 : 20} color={focused ? 'black' : '#969696'}/>,
    },
    {
        name: screens.ProductList,
        focusedRoute: screens.ProductListStack,
        title: 'ProductList',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <Ionicons name="grid-sharp" size={focused ? 20 : 20} color={focused ? 'black' : '#969696'}/>,
    },

     // ProductDetail Stack ==================================================
    {
        name: screens.ProductDetailStack,
        focusedRoute: screens.ProductDetailStack,
        title: 'ProductDetail',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <Ionicons name="grid-sharp" size={focused ? 20 : 20} color={focused ? 'black' : '#969696'}/>,
    },
    {
        name: screens.ProductDetail,
        focusedRoute: screens.ProductDetailStack,
        title: 'ProductDetail',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <Ionicons name="grid-sharp" size={focused ? 20 : 20} color={focused ? 'black' : '#969696'}/>,
    },

    //  CartStack =================================================
    {
        name: screens.CartStack,
        focusedRoute: screens.CartStack,
        title: 'Cart',
        showInTab: true,
        showInDrawer: false,
        icon: (focused) =>
            <FontAwesome name="shopping-cart" size={focused ? 20 : 20} color={focused ? 'black' : '#969696'}/>,
    },
    {
        name: screens.Cart,
        focusedRoute: screens.CartStack,
        title: 'Cart',
        showInTab: true,
        showInDrawer: false,
        icon: (focused) =>
            <FontAwesome name="shopping-cart" size={focused ? 20 : 20} color={focused ? 'black' : '#969696'}/>,
    },

    // Checkout Process ==========================================
    {
        name: screens.CheckoutStack,
        focusedRoute: screens.CheckoutStack,
        title: 'Checkout',
        showInTab: false,
        showInDrawer: false,
    },
    {
        name: screens.Checkout,
        focusedRoute: screens.CheckoutStack,
        title: 'Checkout',
        showInTab: false,
        showInDrawer: false,
    },

    // InvoiceStack ==========================================
    {
        name: screens.InvoiceStack,
        focusedRoute: screens.InvoiceStack,
        title: 'Invoice',
        showInTab: false,
        showInDrawer: false,
    },
    {
        name: screens.Invoice,
        focusedRoute: screens.InvoiceStack,
        title: 'Invoice',
        showInTab: false,
        showInDrawer: false,
    },


    //  CallStack =================================================
    {
        name: screens.CallStack,
        focusedRoute: screens.CallStack,
        title: 'Call Us',
        showInTab: true,
        showInDrawer: false,
        icon: (focused) =>
            <FontAwesome name="phone" size={focused ? 20 : 20} color={focused ? 'black' : '#969696'}/>
    },
    {
        name: screens.Call,
        focusedRoute: screens.CallStack,
        title: 'Call Us',
        showInTab: true,
        showInDrawer: false,
        icon: (focused) =>
            <FontAwesome name="phone" size={focused ? 20 : 20} color={focused ? 'black' : '#969696'}/>
    },


    // UserProfileStack =====================================
    {
        name: screens.UserProfileStack,
        focusedRoute: screens.UserProfileStack,
        title: 'User Profile',
        showInTab: false,
        showInDrawer: false,
    },
    {
        name: screens.UserProfile,
        focusedRoute: screens.UserProfileStack,
        title: 'User Profile',
        showInTab: false,
        showInDrawer: false,
    },

    // PersonalInfoStack ==============================================
    {
        name: screens.PersonalInfoStack,
        focusedRoute: screens.PersonalInfoStack,
        title: 'PersonalInfo',
        showInTab: false,
        showInDrawer: true,
    },
    {
        name: screens.PersonalInfo,
        focusedRoute: screens.PersonalInfoStack,
        title: 'PersonalInfo',
        showInTab: false,
        showInDrawer: false,
    },

    // PurchaseHistoryStack ==========================================
    {
        name: screens.PurchaseHistoryStack,
        focusedRoute: screens.PurchaseHistoryStack,
        title: 'PurchaseHistory',
        showInTab: false,
        showInDrawer: true,
    },
    {
        name: screens.PurchaseHistory,
        focusedRoute: screens.PurchaseHistoryStack,
        title: 'PurchaseHistory',
        showInTab: false,
        showInDrawer: false,
    },

    // ReturnPolicyStack ==============================================
    {
        name: screens.ReturnPolicyStack,
        focusedRoute: screens.ReturnPolicyStack,
        title: 'Return Policy',
        showInTab: false,
        showInDrawer: true,
    },
    {
        name: screens.ReturnPolicy,
        focusedRoute: screens.ReturnPolicyStack,
        title: 'Return Policy',
        showInTab: false,
        showInDrawer: false,
    },

    // SecurityPrivacyStack ============================================
    {
        name: screens.SecurityPrivacyStack,
        focusedRoute: screens.SecurityPrivacyStack,
        title: 'Security & Privacy',
        showInTab: false,
        showInDrawer: false,
    },
    {
        name: screens.SecurityPrivacy,
        focusedRoute: screens.SecurityPrivacyStack,
        title: 'Security & Privacy',
        showInTab: false,
        showInDrawer: false,
    },


    // TermsConditionStack ============================================
    {
        name: screens.TermsConditionStack,
        focusedRoute: screens.TermsConditionStack,
        title: 'Terms & Condition',
        showInTab: false,
        showInDrawer: false,
    },
    {
        name: screens.TermsCondition,
        focusedRoute: screens.TermsConditionStack,
        title: 'Terms & Condition',
        showInTab: false,
        showInDrawer: false,
    },

    // AboutStack ============================================
    {
        name: screens.AboutStack,
        focusedRoute: screens.AboutStack,
        title: 'About',
        showInTab: false,
        showInDrawer: false,
    },
    {
        name: screens.About,
        focusedRoute: screens.AboutStack,
        title: 'About',
        showInTab: false,
        showInDrawer: false,
    },

    // ContactStack ========================================================
    {
        name: screens.ContactStack,
        focusedRoute: screens.ContactStack,
        title: 'Contact Us',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name="phone" size={30} color={focused ? '#551E18' : '#000'}/>,
    },
    {
        name: screens.Contact,
        focusedRoute: screens.ContactStack,
        title: 'Contact Us',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name="phone" size={30} color={focused ? '#551E18' : '#000'}/>,
    },

    // SettingStack ===========================================================
    {
        name: screens.SettingStack,
        focusedRoute: screens.SettingStack,
        title: 'Setting',
        showInTab: false,
        showInDrawer: true,
    },
    {
        name: screens.Setting,
        focusedRoute: screens.SettingStack,
        title: 'Setting',
        showInTab: false,
        showInDrawer: false,
    },
];