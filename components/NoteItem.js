import {
    StyleSheet,
    Text,
    TouchableOpacity
  } from "react-native";

const NoteItem = ({note}) => {
  return (
    <TouchableOpacity style={styles.noteItem}>
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