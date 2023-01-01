import {
    StyleSheet,
    Text,
    View,
  } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>Notes Kit</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        paddingHorizontal: 10,
        backgroundColor: '#40c2ac',
    },

    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default Header