import React from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'


const SearchBar = ({ searchKey, onInput, onEnter }) => {

    return (
        <View style={styleSheet.backgroundStyle}>
            <Feather name='search' style={styleSheet.iconStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search"
                style={styleSheet.inputStyle}
                value={searchKey}
                onChangeText={onInput}
                onEndEditing={onEnter}
            />
        </View>);
};

const styleSheet = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#D3D3D3',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        marginHorizontal: 15,
        alignSelf: "center"
    }
});

export default SearchBar;