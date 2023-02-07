import {StyleSheet, SafeAreaView} from 'react-native'
import AboutUs from '../../src/components/AboutUs/AboutUs'

const AboutScreen = () => {
    return (
        <SafeAreaView style={styles.contactArea}>
            <AboutUs/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    contactArea: {
        flex: 1,
    }
});

export default AboutScreen;