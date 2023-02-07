import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'

const Brand = ({navigation}) => {
    return (
        <View style={styles.contactContainer}>
            <View style={styles.contact}>
                <Text style={styles.contactTitle}>Hello, Brand </Text>
                <TouchableOpacity onPress={()=> navigation.navigate("ProductDetailStack")}>
                    <Text style={{margin:10, textAlign:"center", fontWeight:"bold"}}>Go to Details Page</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    contactContainer: {
        flex: 1,
    },
    contact: {
        flex: 1,
        padding:5,
        ...Platform.select({
            ios: {
                marginBottom: "0%"
            },
            android: {
                marginBottom: 0
            }
        })
    },
    contactTitle:{
        textAlign:"center"
    }
});

export default Brand;