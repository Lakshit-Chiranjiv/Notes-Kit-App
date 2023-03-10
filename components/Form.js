import { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert
  } from "react-native";

const Form = ({submitHandler}) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

  return (
    <View style={styles.form}>
        <Text style={styles.title}>Enter note</Text>
        <TextInput style={styles.input} placeholder="Title" value={title} onChangeText={(val) => setTitle(val)}/>
        <TextInput style={styles.input} placeholder="Content" value={content} onChangeText={(val) => setContent(val)}/>
        <Button title="Add" color="#40c2ac" onPress={() => {
            if(title && content) {
                submitHandler({title, content})
                setTitle('')
                setContent('')
            }
            else {
                Alert.alert('Error', 'Please enter a title and content', [
                    {text: 'GOT IT', onPress: () => console.log('Alert closed')}
                ])
            }
        }}/>
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