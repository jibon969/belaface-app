import {StyleSheet, SafeAreaView} from 'react-native'
import SecurityPrivacy from '../../src/components/UserProfile/SecurityPrivacy'

const SecurityPrivacyScreen = () => {
    return (
        <SafeAreaView style={styles.contactArea}>
            <SecurityPrivacy/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    contactArea: {
        flex: 1,
    }
});

export default SecurityPrivacyScreen;