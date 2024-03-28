import { StyleSheet, Text } from "react-native"

export const Game = () => {
    return (
        <Text style={styles.mock}>Game screen</Text>
    )
} 

const styles = StyleSheet.create({
    mock: {
        fontSize: 24,
        color: 'red'
    }
})