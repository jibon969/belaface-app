import {StyleSheet, SafeAreaView} from 'react-native'
import Setting from '../../src/components/UserProfile/Setting'

const SettingScreen = () => {
    return (
        <SafeAreaView style={styles.contactArea}>
            <Setting/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    contactArea: {
        flex: 1,
    }
});

export default SettingScreen;