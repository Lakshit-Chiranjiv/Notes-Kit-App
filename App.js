import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [name, setName] = useState('Lakshit');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi I am {name} and I am 21</Text>
      <View style={{ marginTop: 20 }}>
        <Button title="Update Name" onPress={() => setName('Lakshit Chiranjiv')} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'purple',
    fontSize: 16,
  }
});
