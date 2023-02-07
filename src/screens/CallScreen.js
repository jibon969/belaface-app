import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Linking} from 'react-native';
import {Feather} from '@expo/vector-icons';

const CallScreen = () => {

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={{padding: 10, borderRadius: 10}}>
                    <Feather name="phone-call" size={100} color="black"/>
                </View>
                <Text style={styles.call} onPress={() => {
                    Linking.openURL('tel:+88 01987132107');
                }}>
                    Click to Call
                </Text>
                <View style={styles.callText}>
                    <Text style={{textAlign: "center", lineHeight: 20}}>
                        We will accept / answer your call during our office hours 9am to 5pm (saturday to
                        thursday)
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        ...Platform.select({
            ios: {
                marginBottom: "0%"
            },
            android: {
                marginBottom: 0
            }
        })
    },
    call: {
        marginTop: 10,
        padding: 7,
        backgroundColor: "#551E18",
        textAlign: "center",
        borderWidth: 1,
        borderRadius: 8,
        fontWeight: "bold",
        borderColor: "#551E18",
        width: 150,
        color: "#FFF",
        overflow: "hidden"
    },

    callText: {
        marginTop: 30,
        marginLeft: 4,
        marginRight: 4
    }

});
export default CallScreen;
