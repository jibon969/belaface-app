import {StyleSheet, SafeAreaView} from 'react-native'
import PurchaseHistory from '../../src/components/UserProfile/PurchaseHistory'

const PurchaseHistoryScreen = () => {
    return (
        <SafeAreaView style={styles.contactArea}>
            <PurchaseHistory/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    contactArea: {
        flex: 1,
    }
});

export default PurchaseHistoryScreen;