import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Form from "./components/Form";
import Header from "./components/Header";
import NoteItem from "./components/NoteItem";

export default function App() {

  const [notes, setNotes] = useState([
    { title: "Note 1", content: "Content 1", key: "1" },
    { title: "Note 2", content: "Content 2", key: "2" },
    { title: "Note 3", content: "Content 3", key: "3" },
    { title: "Note 4", content: "Content 4", key: "4" },
  ])

  const notePressHandler = (key) => {
    setNotes((prevNotes) => {
      return prevNotes.filter(note => note.key != key);
    })
  }

  const noteSubmitHandler = (note) => {
    setNotes((prevNotes) => {
      return [
        { title: note.title, content: note.content, key: Math.random().toString() },
        ...prevNotes
      ]
    })
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed keyboard');
    } }>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <Form submitHandler={noteSubmitHandler}/>
          <View style={styles.list}>
            <FlatList 
              data={notes}
              renderItem={({ item }) => (
                <NoteItem note={item} pressHandler={notePressHandler}/>
              )}
              keyExtractor={(item) => item.key}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    flex: 1,
    padding: 40,
  },

  list: {
    flex: 1,
    marginTop: 20,
  }
});
