import axios from 'axios';
// call axios to get data from api

export const getApiData = () => {
    return () => {
        axios.get('https://media-content.ccbp.in/website/react-assignment/resources.json')
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }
}