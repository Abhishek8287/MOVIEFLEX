import axios from "axios";

//whenver we are calling an api we have to perform error handling at the same time..error might be occur from some server side

export const categoriesMovies = async (API_URL) => {
    try {
        //as response constina many items so we just need to resurn the data 
        const response = await axios.get(API_URL);
        return response.data;
    }
    catch (error) {
        console.log("error message while calling " + error.message);
        return error.response.data;
    }
}