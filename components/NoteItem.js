import {
    StyleSheet,
    Text,
    View,
  } from "react-native";

const NoteItem = ({note}) => {
  return (
    <View style={styles.noteItem}>
        <Text style={styles.noteTitle}>{note.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    noteItem: {
        padding: 16,
        marginTop: 16,
        backgroundColor: '#40c2ac',
        borderColor: '#000',
        borderWidth: 1,
    },

    noteTitle: {
        fontSize: 18,
    }
})

export default NoteItem