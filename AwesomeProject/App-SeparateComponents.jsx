import { StyleSheet, Text, View } from "react-native";

function Hello() {
    return <Text style={styles.lable}>Hello React  Native!</Text>
}


function App() {
    return <View style={styles.container}>
            <Hello/>
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