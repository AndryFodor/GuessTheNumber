import { StyleSheet, Text, TextInput, View } from "react-native"
import { CustomButton } from "../components/CustomButton";

export const StartGame = () => {
    const buttonPressed = () => {
        console.log("Custom button pressed");
    }
    return (<>
        <Text style={styles.mock}>Start game screen</Text>
        <TextInput style={styles.input} placeholder="Num"/>
        <View style={styles.buttonContainer}>
            <CustomButton clickHandler={buttonPressed} styles={buttonsStyles} >Reset</CustomButton>
            <CustomButton styles={buttonsStyles} >Confirm</CustomButton>
        </View>
    </>
    )
}

const buttonsStyles = StyleSheet.create({
    customButton: {
        backgroundColor: '#079f92',
        borderRadius: 10,
        width: '30%'
    },
    customButton__text: {
        color: '#d5e8fa',
        fontSize: 18,
        paddingHorizontal: 20,
        paddingVertical: 8,
        textAlign: 'center'
    }
})

const styles = StyleSheet.create({
    mock: {
        fontSize: 24,
        color: 'red'
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