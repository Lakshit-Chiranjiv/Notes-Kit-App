import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
  } from "react-native";

const Form = () => {
  return (
    <View style={styles.form}>
        <Text style={styles.title}>Enter note</Text>
        <TextInput style={styles.inputTitle} placeholder="Title"/>
        <TextInput style={styles.inputContent} placeholder="Content"/>
        <Button title="Add" color="#40c2ac"/>
    </View>
  )
}


export default Form