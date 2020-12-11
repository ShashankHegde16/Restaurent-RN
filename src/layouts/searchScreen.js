import React, { useState } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import SearchBar from '../components/searchBar';
import useRestaurents from '../hooks/useRestaurents';
import Restaurents from '../components/restaurentsList';



const SearchScreen = ({ }) => {
    const [searchKey, setSearchKey] = useState('');
    const [restaurents, errorMessage, searchApi] = useRestaurents();

    const filterRestaurentsByPrice = (price) => {
        return restaurents.filter(ele => ele.price == price)
    }
    return (
        <>
            <SearchBar
                searchKey={searchKey}
                onInput={(key) => setSearchKey(key)}
                onEnter={() => searchApi(searchKey)} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <Restaurents title="Cost Effective" filter={filterRestaurentsByPrice('$')} />
                <Restaurents title="Big Pricier" filter={filterRestaurentsByPrice('$$')} />
                <Restaurents title="Big Spender" filter={filterRestaurentsByPrice('$$')} />
            </ScrollView>
        </>
    );
};

const styleSheet = StyleSheet.create({

});

export default SearchScreen;