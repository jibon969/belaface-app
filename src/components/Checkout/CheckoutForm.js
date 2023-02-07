import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    View
} from "react-native";
import {BASE_URL} from "../../api/api";

const CheckoutForm = ({navigation}) => {


    return (
        <>
            <View style={{flex: 1, flexDirection: "row"}}>
                <View style={{flex: 1}}>
                    <View style={{marginBottom: 10}}>
                        <TextInput
                            name="first_name"
                            placeholder="First Name * "
                            style={styles.checkoutAddressForm}
                            selectionColor="#183153"
                        />
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <View style={{marginBottom: 10}}>
                        <TextInput
                            name="last_name"
                            placeholder="Last Name * "
                            style={styles.checkoutAddressForm}
                            selectionColor="#183153"
                        />
                    </View>
                </View>
            </View>
            <View style={{marginBottom: 10}}>
                <TextInput
                    name="email"
                    placeholder="Email Address"
                    style={styles.checkoutAddressForm}
                    keyboardType="email-address"
                    selectionColor="#183153"
                />
            </View>
            <View style={{marginBottom: 10}}>
                <TextInput
                    name="contact_number"
                    placeholder="Phone Number * "
                    style={styles.checkoutAddressForm}
                    selectionColor="#183153"
                    editable={false}
                />
            </View>
            <View style={{marginBottom: 10}}>
                <TextInput
                    name="address"
                    placeholder="Address (Ex. street name, street number, house/flat number) * "
                    style={styles.checkoutAddressForm}
                    selectionColor="#183153"
                />
            </View>
            <View style={{marginBottom: 10}}>
                <TextInput
                    name="location"
                    placeholder="Your area ( Ex. Mirpur, Dhanmondi ) *"
                    style={styles.checkoutAddressForm}
                    selectionColor="#183153"
                />
            </View>
            <View style={{marginBottom: 10}}>
                <TextInput
                    name="city"
                    placeholder="City ( Ex. Dhaka, Khulna, Chittagong ) *"
                    style={styles.checkoutAddressForm}
                    selectionColor="#183153"
                />
            </View>

            <TextInput
                name="notes"
                placeholder="Notes for order, delivery (optional). e.g. specific delivery date or packaging *"
                style={styles.checkoutAddressNoteForm}
                selectionColor="#183153"
            />

            <View style={{flexDirection: "row", marginBottom: 10, flexWrap: "wrap"}}>
                <View>
                    <Text style={{fontSize: 13, marginRight: 2}}>
                        By Clicking Place an order you also agree to all the
                    </Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text style={{color: "blue", fontSize: 13}}>Terms & Conditions</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/*<Text style={styles.placeAnOrder}>Loading...</Text>*/}
            <TouchableOpacity onPress={()=> navigation.navigate("InvoiceStack")}>
                <Text style={styles.placeAnOrder}>Place your order</Text>
            </TouchableOpacity>
            <View style={{marginBottom: 50}}/>
        </>
    )
};

const styles = StyleSheet.create({
    checkoutAddressForm: {
        height: 40,
        marginLeft: 2,
        marginRight: 3,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: "#D9D9D9",
        color: "black"
    },
    checkoutAddressNoteForm: {
        height: 60,
        marginLeft: 2,
        marginRight: 3,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: "#D9D9D9",
        marginBottom: 10,
    },
    placeAnOrder: {
        padding: 7,
        backgroundColor: "#551E18",
        textAlign: "center",
        borderWidth: 1,
        borderRadius: 8,
        fontWeight: "bold",
        borderColor: "#551E18",
        color: "#FFF",
        marginBottom: 10,
        overflow: "hidden",
    },
    loginContainer: {
        width: '80%',
        alignItems: 'center',
        padding: 10,
        elevation: 10,
        backgroundColor: '#e6e6e6'
    },
    textInput: {
        height: 40,
        width: '100%',
        margin: 10,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
    },

});


export default CheckoutForm;