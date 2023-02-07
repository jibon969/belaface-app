import React from 'react';
import {SafeAreaView, View, StyleSheet, Platform, ScrollView, Text} from 'react-native'


const SearchProduct = ({navigation, route}) => {

    return (
        <SafeAreaView style={styles.productListContainer}>
            <View style={styles.productListWrap}>
                <ScrollView>
                    <View>
                        <Text>Search Here ..</Text>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    productListContainer: {
        flex: 1,
    },
    productListWrap: {
        flex: 1,
        ...Platform.select({
            ios: {
                marginBottom: "0%"
            },
            android: {
                marginBottom: 0
            }
        })
    },

});

export default SearchProduct;