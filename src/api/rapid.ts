import { Movie } from "@/types";
import axios from "axios";
import Snackbar from "react-native-snackbar";

export const fetchDataByCategory = async (category: string): Promise<Movie[]> => {

    const options = {
        method: 'GET',
        url: 'https://ott-details.p.rapidapi.com/advancedsearch',
        params: {
            start_year: '1970',
            end_year: '2020',
            min_imdb: '8.5',
            max_imdb: '10',
            genre: category,
            language: 'english',
            type: 'movie',
            sort: 'latest',
            page: '1'
        },
        headers: {
            'X-RapidAPI-Key': 'c426f143a6msheec5fa76c0c5c1bp1c836cjsn6a51effb3b0e',
            'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);

        return response.data.results as Movie[]
    } catch (error) {
        Snackbar.show({
            text: `Error ${error}`,
            duration: Snackbar.LENGTH_LONG,

        });
        return []
    }
};