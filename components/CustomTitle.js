import { StyleSheet, Text } from "react-native"

export const CustomTitle = ({children, styles}) => {
    const currentStyles = {...defaultStyles, ...styles};
    return (
        <Text style={[currentStyles.title, currentStyles.title__outside]}>{children}</Text>
    )
} 

const defaultStyles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: '#03786e',
        fontWeight: 'bold',
        margin: '3%'
    },
    title__outside: {}
})