import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "./components/Header";
import NoteItem from "./components/NoteItem";

export default function App() {

  const [notes, setNotes] = useState([
    { title: "Note 1", content: "Content 1", key: "1" },
    { title: "Note 2", content: "Content 2", key: "2" },
    { title: "Note 3", content: "Content 3", key: "3" },
    { title: "Note 4", content: "Content 4", key: "4" },
  ])

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList 
            data={notes}
            renderItem={({ item }) => (
              <NoteItem note={item}/>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    padding: 40,
  },

  list: {
    marginTop: 20,
  }
});
