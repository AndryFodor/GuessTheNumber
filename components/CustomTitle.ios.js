import { StyleSheet, Text } from "react-native"
import { colors } from "../utils/colors";

export const CustomTitle = ({children, styles}) => {
    return (
        <Text style={[defaultStyles.title, styles]}>{children}</Text>
    )
} 

const defaultStyles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: colors.green700,
        margin: '3%'
    }
})