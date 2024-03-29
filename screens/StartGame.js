import { Alert, StyleSheet, Text, TextInput, View } from "react-native"
import { CustomButton } from "../components/CustomButton";
import { useState } from "react";

export const StartGame = ({startGame}) => {
    const [number, setNumber] = useState('');
    const resetNumber = () => {
        setNumber('');
    }
    const textInputChange = (inputedNumber) => {
        setNumber(inputedNumber);
    }
    const confirmNumber = () => {
        const regex = /[ -.,]/;
        if (!regex.test(number) && number) {
            startGame(parseInt(number))
        } else {
            Alert.alert("Invalid number!",
                "You should enter only positive numbers",
                [{ text: "OK", style: "destructive", onPress: resetNumber }])
        }
    }

    return (<>
        <Text style={styles.mock}>Enter the number</Text>
        <TextInput
            style={styles.input}
            maxLength={2}
            keyboardType="number-pad"
            onChangeText={textInputChange}
            value={number} />
        <View style={styles.buttonContainer}>
            <CustomButton clickHandler={resetNumber} >Reset</CustomButton>
            <CustomButton clickHandler={confirmNumber}>Confirm</CustomButton>
        </View>
    </>
    )
}

const buttonStyle = StyleSheet.create({
    customButton__outside: {
        backgroundColor: 'red'
    }
})

const styles = StyleSheet.create({
    mock: {
        fontSize: 30,
        color: '#03786e'
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
        marginTop: '5%'
    },
    input: {
        backgroundColor: '#82d8ec66',
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginVertical: 5,
        borderRadius: 20,
        color: '#079f92',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        borderBottomWidth: 3,
        borderBottomColor: '#079f92'
    }
})