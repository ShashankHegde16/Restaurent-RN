import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';


const Home = () => {
    const array = [{
        'name': 'Shashank'
    }, { 'name': 'Hegde' }]
    return (
        <View style={styleSheet.container}>
            <Text style={{ fontSize: 20 }}>Greetings!</Text>
            <FlatList
                keyExtractor={(item) => item.name}
                data={array}
                renderItem={({ item }) => {
                    return <Text>{item.name}</Text>
                }}
            />
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