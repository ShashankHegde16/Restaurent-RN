import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const Home = () => {
    return (
        <View style={styleSheet.container}>
            <Text style={{ fontSize: 20 }}>Greetings!</Text>
        </View>);
};

const styleSheet = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        flex: 100
    }
})

export default Home;