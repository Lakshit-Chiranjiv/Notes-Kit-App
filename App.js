import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";

export default function App() {
  const [name, setName] = useState("Lakshit");
  const [age, setAge] = useState(21);
  const [sport, setSport] = useState("");
  const [people, setPeople] = useState([
    "Lakshit",
    "Chiranjiv",
    "Lakshit Chiranjiv",
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>
          Hi I am {name} and I am {age}
        </Text>
        <Text style={styles.text}>I love playing : {sport}</Text>
        <View style={{ marginTop: 20 }}>
          <Button
            title="Update Name"
            onPress={() => setName("Lakshit Chiranjiv")}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text>Enter sport</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. Cricket"
            onChangeText={(val) => setSport(val)}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          {people.map((person, index) => {
            return (
              <View key={index}>
                <Text style={styles.listText}>{person}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "purple",
    fontSize: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },

  listText: {
    color: "white",
    backgroundColor: "purple",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
