import { StyleSheet, Text, View } from "react-native";
import { Hello } from "./components/Hello";

function App() {
    return <View style={styles.container}>
        <Hello message="Hello React Native" />
        <Hello message="Hai React Native" />
        <Hello message="How are you? React Native" />
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lable: {
        fontSize: 30
    }
})

export default App;