import {View, StyleSheet, Text} from 'react-native'

const TrackingMyParcel = () => {
    return (
        <View style={styles.container}>
            <View style={styles.contact}>
                <Text style={styles.homeTitle}>Hello, I am TrackingMyParcel </Text>
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
    homeTitle: {
        textAlign: "center"
    }
});

export default TrackingMyParcel;