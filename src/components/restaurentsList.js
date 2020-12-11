import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import Cards from './restaurentCards';

const Restaurents = ({ title, filter }) => {
    return (
        <View style={styleSheet.container}>
            <Text style={styleSheet.textStyle}>
                {title}
            </Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={filter}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <Cards cardDetails={item} />
                    )
                }}
            />

        </View>
    );

}
const styleSheet = StyleSheet.create({
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});


export default Restaurents;