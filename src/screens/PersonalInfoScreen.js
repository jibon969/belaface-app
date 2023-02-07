import {StyleSheet, SafeAreaView} from 'react-native'
import PersonalInfo from '../../src/components/UserProfile/PersonalInfo'

const PersonalInfoScreen = () => {
    return (
        <SafeAreaView style={styles.contactArea}>
            <PersonalInfo/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    contactArea: {
        flex: 1,
    }
});

export default PersonalInfoScreen;