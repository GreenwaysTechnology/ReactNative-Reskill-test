import { StyleSheet, Text, View } from "react-native";
import { Counter } from "./components/Counter";

function App() {
    return <View style={styles.container}>
            <Counter/>
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