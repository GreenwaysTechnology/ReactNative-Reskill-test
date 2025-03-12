import { StyleSheet, Text } from "react-native";

export function Hello(props) {
    return <Text style={styles.lable}>{props.message}</Text>
}

const styles = StyleSheet.create({
    lable: {
        fontSize: 30
    }
})