import { StyleSheet, Text } from "react-native"

export const GameOver = () => {
    return (
        <Text style={styles.mock}>Game over screen</Text>
    )
} 

const styles = StyleSheet.create({
    mock: {
        fontSize: 24,
        color: 'red'
    }
})