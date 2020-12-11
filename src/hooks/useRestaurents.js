import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';


export default () => {
    const [restaurents, getRestaurents] = useState([]);
    const [errorMessage, setError] = useState('');

    useEffect(() => {
        searchApi('pasta')
    }, [])

    const searchApi = async (searchKey) => {
        try {
            const searchResults = await yelp.get('/search', {
                params: {
                    limit: 20,
                    term: searchKey,
                    location: 'Kaula Lumpur'
                }
            });
            getRestaurents(searchResults.data.businesses);
        }
        catch (error) {

            setError('Something Broke!');
        }

    }
    return [restaurents, errorMessage, searchApi];
}