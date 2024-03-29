import { StyleSheet, Text } from "react-native"
import { CustomButton } from "../components/CustomButton"

export const Game = ({ guessedNum, beckHandler }) => {
    return (
        <>
            <Text style={styles.mock}>Game screen. Number = {guessedNum}</Text>
            <CustomButton styles={{customButton__outside: {width: '50%'}}} clickHandler={beckHandler}>Reset number</CustomButton>
        </>
    )
}

const styles = StyleSheet.create({
    mock: {
        fontSize: 24,
        color: 'red'
    }
})