import {StyleSheet, SafeAreaView} from 'react-native'
import Brand from '../../src/components/Brand/Brand'

const BrandScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.contactArea}>
            <Brand navigation={navigation}/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    contactArea: {
        flex: 1,
    }
});

export default BrandScreen;