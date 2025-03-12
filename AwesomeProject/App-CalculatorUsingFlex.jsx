import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function App() {
    //to get input
    const [input, setInput] = useState('');
    //to show output
    const [result, setResult] = useState('');

    const handlePress = (value) => {
        if (value === '=') {
            try {
                // Evaluate the expression
                setResult(eval(input).toString());
            } catch (error) {
                setResult('Error');
            }
        } else if (value === 'C') {
            setInput('');
            setResult('');
        } else {
            // append with previous values
            setInput((prev) => prev + value);
        }
    };

    return <View style={styles.container}>
        {/* Display */}
        <View style={styles.display}>
            <Text style={styles.inputText}>{input}</Text>
            <Text style={styles.resultText}>{result}</Text>
        </View>
        {/* Buttons */}
        <View style={styles.buttonsContainer}>
            {[
                ['C', '(', ')', '/'],
                ['7', '8', '9', '*'],
                ['4', '5', '6', '-'],
                ['1', '2', '3', '+'],
                ['0', '.', '=', '%'],
            ].map((row, rowIndex) => (
                <View style={styles.row} key={rowIndex}>
                    {row.map((button) => (
                        <TouchableOpacity
                            key={button}
                            style={[styles.button, button === '=' && styles.equalButton]}
                            onPress={() => handlePress(button)}
                        >
                            <Text
                                style={[
                                    styles.buttonText,
                                    button === '=' && styles.equalButtonText,
                                ]}
                            >
                                {button}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            ))}
        </View>
    </View>
}
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282c34',
    },
    display: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#1c1e22',
        padding: 20,
    },
    inputText: {
        fontSize: 36,
        color: '#fff',
        marginBottom: 10,
    },
    resultText: {
        fontSize: 24,
        color: '#a9a9a9',
    },
    buttonsContainer: {
        flex: 2,
        backgroundColor: '#000',
        padding: 10,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        flex: 1,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#444',
        borderRadius: 8,
        height: '80%', // Maintain height consistency
    },
    buttonText: {
        fontSize: 24,
        color: '#fff',
    },
    equalButton: {
        backgroundColor: '#f39c12',
    },
    equalButtonText: {
        fontWeight: 'bold',
    },
});