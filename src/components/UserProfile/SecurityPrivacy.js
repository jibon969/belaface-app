import {View, StyleSheet, Text} from 'react-native'

const SecurityPrivacy = () => {
    return (
        <View style={styles.container}>
            <View style={styles.contact}>
                <Text>Hello, I am Return Policy </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contact: {
        flex: 1,
        padding: 5,
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

export default SecurityPrivacy;