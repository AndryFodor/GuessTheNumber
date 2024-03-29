import { StyleSheet, Text } from "react-native"
import { colors } from "../utils/colors";

export const CustomTitle = ({children, styles}) => {
    const currentStyles = {...defaultStyles, ...styles};
    return (
        <Text style={[currentStyles.title, currentStyles.title__outside]}>{children}</Text>
    )
} 

const defaultStyles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: colors.green700,
        fontWeight: 'bold',
        margin: '3%'
    },
    title__outside: {}
})