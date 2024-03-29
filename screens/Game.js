import { StyleSheet } from "react-native"
import { CustomButton } from "../components/CustomButton"
import { CustomTitle } from "../components/CustomTitle"
import { useState } from "react"
import { NumberCont } from "../components/NumberCont"

export const Game = ({ guessedNum, beckHandler,  userNumber}) => {
    const generateRandomNumber = (min, max, exclude) => {
        let randomNum = Math.floor(Math.random() * (max - min)) + min;
        
        if(randomNum === exclude) return generateRandomNumber(min, max, exclude);
        else return randomNum
    }
    let initialGuess = generateRandomNumber(0, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    
    return (
        <>
            <CustomTitle>Opponent`s guess</CustomTitle>
            <NumberCont>{currentGuess}</NumberCont>
            <CustomButton styles={{customButton__outside: {width: '50%'}}} clickHandler={beckHandler}>Reset number</CustomButton>
        </>
    )
}

const styles = StyleSheet.create({
})