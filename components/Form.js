import { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
  } from "react-native";

const Form = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

  return (
    <View style={styles.form}>
        <Text style={styles.title}>Enter note</Text>
        <TextInput style={styles.input} placeholder="Title"/>
        <TextInput style={styles.input} placeholder="Content"/>
        <Button title="Add" color="#40c2ac"/>
    </View>
  )
}

const styles = StyleSheet.create({
    form: {
        marginTop: 10,
    },

    title: {
        fontSize: 16,
    },

    input: {
        marginTop: 10,
        marginBottom: 10,
        padding: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 6,
    }

})

export default Form