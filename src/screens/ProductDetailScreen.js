import {StyleSheet, SafeAreaView} from 'react-native'
import ProductDetail from '../../src/components/ProductDetail/ProductDetail'

const ProductDetailScreen = () => {
    return (
        <SafeAreaView style={styles.contactArea}>
            <ProductDetail/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    contactArea: {
        flex: 1,
    }
});

export default ProductDetailScreen;