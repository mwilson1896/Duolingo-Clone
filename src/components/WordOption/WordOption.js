import React from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'

const WordOption = ({ text, onPress, isSelected }) => {
    return (
        <Pressable onPress={onPress} style={[styles.root, 
        {backgroundColor:isSelected ? "lightgrey" : "white"} 
        ]}
        >
         <Text style={[styles.text, {color: isSelected ? "lightgrey" : "black"}]}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create ({
    root: {
        borderWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'black',
        borderRadius: 5,

        padding: 5,
        paddingHorizontal: 15,
        paddingBottom: 5,
        margin: 10,
    },
    text: {

    },
})


export default WordOption
