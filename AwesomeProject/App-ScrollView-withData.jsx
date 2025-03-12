import { ScrollView, StyleSheet, Text, View } from "react-native";
import { TODOS } from "./mock-data/todos";

function Todo(props) {

    return <>
        <ScrollView style={{ marginTop: 30 }}>
            {props.todos.map(todo => {
                return <Text key={todo.id}>{todo.title}</Text>
            })}
        </ScrollView>
    </>
}

function App() {
    return <View style={styles.container}>
        <Todo todos={TODOS}></Todo>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        flex: 1,
    },

})

export default App;