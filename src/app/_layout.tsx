import { Stack } from "expo-router"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { colors } from "../styles/colors"


export default function Layout() {



    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack
                 screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: colors.gray.bg },
                  }}
            />
        </GestureHandlerRootView>
    )
}