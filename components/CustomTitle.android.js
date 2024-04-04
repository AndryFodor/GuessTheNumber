import { StyleSheet, Text } from "react-native"
import { colors } from "../utils/colors";

// також для задання різних стилів та розмітки також можна використати такий підхід. Створити два однойменні файли, відмінність полягає в тому, що після імені файлу перед .js ще стоїть або .ios (тут буде розмітка та стилі, які під капотом повертатиметься саме для айфонів) або .android (ця розмітка повертатиметься саме для андроїдів). Таким чином також можна досягнути різної структури для різних платформ. Важливо, що при імпортуванні компонента з цих файлів не можна вказувати розширення .ios або .android, інакше код не працюватиме належним чином. В цьому прикладі для ОС андроїд всі заголовки будуть похилими. Для айфонів же - ні.
export const CustomTitle = ({children, styles}) => {
    return (
        <Text style={[defaultStyles.title, styles]}>{children}</Text>
    )
} 

const defaultStyles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: colors.green700,
        margin: '3%',
        fontStyle: 'italic'
    }
})