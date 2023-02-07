import {StyleSheet, SafeAreaView} from 'react-native'
import ReturnPolicy from '../../src/components/UserProfile/ReturnPolicy'

const ReturnPolicyScreen = () => {
    return (
        <SafeAreaView style={styles.contactArea}>
            <ReturnPolicy/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    contactArea: {
        flex: 1,
    }
});

export default ReturnPolicyScreen;