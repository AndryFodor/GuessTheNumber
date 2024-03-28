import { StyleSheet, Text } from "react-native"

export const StartGame = () => {
    return (
        <Text style={styles.mock}>Start game screen</Text>
    )
} 

const styles = StyleSheet.create({
    mock: {
        fontSize: 24,
        color: 'red'
    }
})