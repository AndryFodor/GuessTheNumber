import { Alert, KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, View, useWindowDimensions } from "react-native"
import { CustomButton } from "../components/CustomButton";
import { useState } from "react";
import { CustomTitle } from "../components/CustomTitle";
import { colors } from "../utils/colors";

export const StartGame = ({ startGame }) => {
    const [number, setNumber] = useState('');
    const { height, width } = useWindowDimensions();
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
    // компонент KeyboardAvoidingView необхідно використати для того, аби на айфонах клавіатура для вводу цифр зникала, адже без нього вона залишається фіксованою і все ламається. На Андроїдах це не має ніякого ефекту.

    return (<>
                <KeyboardAvoidingView style={styles.fullScreen} behavior="height">
                    <CustomTitle styles={[styles.title, { margin: height < width ? '.5%' : '3%' }]}>Enter a number</CustomTitle>
                    <TextInput
                        style={styles.input}
                        maxLength={2}
                        keyboardType="number-pad"
                        onChangeText={textInputChange}
                        value={number} />
                    <View style={[styles.buttonContainer, { marginTop: height < width ? '2%' : '5%' }]}>
                        <CustomButton clickHandler={resetNumber} >Reset</CustomButton>
                        <CustomButton clickHandler={confirmNumber}>Confirm</CustomButton>
                    </View>
                </KeyboardAvoidingView>
    </>
    )
}

const buttonStyle = StyleSheet.create({
    customButton__outside: {
        backgroundColor: 'red'
    }
})

const styles = StyleSheet.create({
    fullScreen: {
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
    },
    input: {
        backgroundColor: colors.primaryBlueOpacity,
        paddingHorizontal: 15,
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