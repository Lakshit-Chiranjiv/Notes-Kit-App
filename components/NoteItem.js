import {
    StyleSheet,
    Text,
    TouchableOpacity
  } from "react-native";

const NoteItem = ({note, pressHandler}) => {
  return (
    <TouchableOpacity style={styles.noteItem} onPress={() => pressHandler(note.key)}>
        <Text style={styles.noteTitle}>{note.title}</Text>
        <Text>{note.content}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    noteItem: {
        padding: 16,
        marginTop: 16,
        backgroundColor: '#8cfab6',
        borderColor: '#000',
        borderWidth: 1,
    },

    noteTitle: {
        fontSize: 18,
    }
})

export default NoteItem