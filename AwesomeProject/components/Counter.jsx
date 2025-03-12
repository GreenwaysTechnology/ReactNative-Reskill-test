import { useState } from "react";
import { Button, StyleSheet, Text } from "react-native";

function Counter() {
    const [counter, setCounter] = useState(0)
    return <>
        <Text style={styles.lable}>Counter App</Text>
        <Text style={styles.valueLable}>Counter : {counter}</Text>
        <Button title="+" color="#841584" onPress={() => {
            setCounter(counter + 1)
        }} />
    </>

}

export { Counter }

const styles = StyleSheet.create({
    lable: {
        fontSize: 30
    },
    valueLable: {
        fontSize: 25
    }
})