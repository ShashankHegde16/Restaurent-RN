import axios from 'axios';
export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer GhkFa6ldBy6jqbB2GjXX6dMk_ADkDSe4Ph53A71ENoqVnCuNFzRktTioXfv1vOnKsBgbx6zW8eGjbz5a57fxETu25wXysKoapraoiUeQnwxManMODrPe25pDoifTX3Yx"
    }
})