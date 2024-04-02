import { useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"
import { CustomButton } from "../components/CustomButton";

export const GameOver = ({changeTitle, guessedNum, attemptsNumber, restart}) => {
    useEffect(() => {
        changeTitle("Game over")
    }, []);
    return (
        <View>
            <Text>You are winner!</Text>
            <Text>The number you have guessed is {guessedNum}</Text>
            <Text>You used {attemptsNumber} attempts.</Text>
            <CustomButton clickHandler={restart}>Try again?</CustomButton>
        </View>
    )
} 

const styles = StyleSheet.create({
    
})