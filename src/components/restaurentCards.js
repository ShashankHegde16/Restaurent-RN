import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList, Image } from 'react-native';

const Cards = ({ cardDetails }) => {
    return (
        <View style={styleSheet.container}>
            <Image
                source={{ uri: cardDetails.image_url }}
                style={styleSheet.imageStyle}
            />
            <Text style={styleSheet.nameStyle}>{cardDetails.name}</Text>
            <Text>
                {cardDetails.rating} Stars, {cardDetails.review_count} Reviews
            </Text>
        </View>
    )

}
const styleSheet = StyleSheet.create({
    imageStyle: {
        width: 250,
        height: 125,
        borderRadius: 4,
        marginBottom: 5
    },
    nameStyle: {
        fontWeight: 'bold',

    },
    container: {
        marginHorizontal: 15
    }
});


export default Cards;