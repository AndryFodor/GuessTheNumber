import { StyleSheet } from "react-native"
import { CustomButton } from "../components/CustomButton"
import { CustomTitle } from "../components/CustomTitle"

export const Game = ({ guessedNum, beckHandler }) => {
    return (
        <>
            <CustomTitle>Opponent`s guess</CustomTitle>
            <CustomButton styles={{customButton__outside: {width: '50%'}}} clickHandler={beckHandler}>Reset number</CustomButton>
        </>
    )
}

const styles = StyleSheet.create({
})