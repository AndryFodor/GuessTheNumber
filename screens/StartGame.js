import { Alert, StyleSheet, TextInput, View } from "react-native"
import { CustomButton } from "../components/CustomButton";
import { useState } from "react";
import { CustomTitle } from "../components/CustomTitle";
import { colors } from "../utils/colors";

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
        <CustomTitle styles={styles.title}>Enter a number</CustomTitle>
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
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
        marginTop: '5%'
    },
    input: {
        backgroundColor: colors.primaryBlueOpacity,
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginVertical: 5,
        borderRadius: 20,
        color: colors.green500,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        borderBottomWidth: 3,
        borderBottomColor: colors.green500
    },
    title: {
        fontWeight: 'bold'
    }
})