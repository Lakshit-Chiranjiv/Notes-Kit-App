import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
  } from "react-native";

  import { MaterialIcons } from '@expo/vector-icons';

const NoteItem = ({note, pressHandler}) => {
  return (
    <TouchableOpacity style={styles.noteItem}>
      <View>
        <Text style={styles.noteTitle}>{note.title}</Text>
        <Text>{note.content}</Text>
      </View>
      <TouchableOpacity onPress={() => pressHandler(note.key)}>
        <MaterialIcons name="delete" size={24} color="red" />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    noteItem: {
        padding: 16,
        marginTop: 16,
        backgroundColor: '#8cfab6',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    noteTitle: {
        fontSize: 18,
    }
})

export default NoteItem