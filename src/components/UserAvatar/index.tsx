import { View, Text, useColorScheme } from "react-native";
import { styles } from "./styles";
import { ligthTheme } from "@/theme";

interface UserAvatarProps {
    firstName?: string
    lastName?: string
}

function UserAvatar(props: UserAvatarProps) {
    const theme = useColorScheme() === "dark" ? ligthTheme : ligthTheme

    return (
        <View style={[styles.container,
        { backgroundColor: theme.detailScreen.iconBackgroundColor }]}>
            <Text style={[styles.iconText,
            { color: theme.detailScreen.color }]}>
                {props.firstName?.split("")[0]}
            </Text>
            <Text style={[styles.iconText,
            { color: theme.detailScreen.color }]}>
                {props.lastName?.split("")[0]}
            </Text>
        </View>
    );
}

export default UserAvatar;