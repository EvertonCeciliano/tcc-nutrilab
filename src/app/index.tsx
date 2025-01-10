import { View, Text } from "react-native"
import { Button } from "../components/button"



export default function Index() {
    return (
        <View>

            <Text>

            </Text>
            <Button text="login with google"
             img={require("../../assets/images/icon.png")} 
             color="secondary"
             onPress={() => console.log("Hello")} />
            <Button text="login with google"
             img={require("../../assets/images/icon.png")} 
             color="primary"
             onPress={() => console.log("Hello")} />


        </View>
    )
}