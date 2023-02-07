import {StyleSheet, SafeAreaView} from 'react-native'
import TermsCondition from '../../src/components/UserProfile/TermsCondition'

const TermsConditionScreens = () => {
    return (
        <SafeAreaView style={styles.contactArea}>
            <TermsCondition/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    contactArea: {
        flex: 1,
    }
});

export default TermsConditionScreens;