import axios from 'axios';
import Snackbar from 'react-native-snackbar';
import { FilmDitails, Movie, TopMovie } from '@/types';
import { fetchDataByCategoryData, filmByTitleDate, movieInfoDate, top100FilmsDate } from '@/constants';

export const fetchDataByCategory = async (category: string): Promise<Movie[]> => {

  const options = {
    method: 'GET',
    url: 'https://ott-details.p.rapidapi.com/advancedsearch',
    params: {
      start_year: '2022',
      end_year: '2023',
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

    // return response.data.results as Movie[]
    return fetchDataByCategoryData
  } catch (error) {
    Snackbar.show({
      text: `Error ${error}`,
      duration: Snackbar.LENGTH_LONG,
    });
    return []
  }
}

export async function getTop100Movies(): Promise<TopMovie[]> {
  const options = {
    method: 'GET',
    url: 'https://imdb-top-100-movies.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': '6dfe802731msh7c87e1d09eb105ep1671f0jsnd54f8c71fc1e',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
    },
  };

  try {
    // const response = await axios.request(options);
    return top100FilmsDate;
  } catch (error) {
    Snackbar.show({
      text: `Error ${error}`,
      duration: Snackbar.LENGTH_LONG,
    });

    return [];
  }
}

export async function getMoviesInfo(movieId: string): Promise<FilmDitails | null> {
  const options = {
    method: 'GET',
    url: 'https://ott-details.p.rapidapi.com/getadditionalDetails',
    params: {
      imdbid: movieId,
    },
    headers: {
      'X-RapidAPI-Key': '6dfe802731msh7c87e1d09eb105ep1671f0jsnd54f8c71fc1e',
      'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
    },
  };

  try {
    // const response = await axios.request(options);
    // return response.data;

    return movieInfoDate
  } catch (error) {
    Snackbar.show({
      text: `Error ${error}`,
      duration: Snackbar.LENGTH_LONG,
    });

    return null;
  }
}

export async function getFilmByTitle(title: string): Promise<Movie | null> {
  const options = {
    method: 'GET',
    url: 'https://ott-details.p.rapidapi.com/search',
    params: {
      title,
      page: '1',
    },
    headers: {
      'X-RapidAPI-Key': '6dfe802731msh7c87e1d09eb105ep1671f0jsnd54f8c71fc1e',
      'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
    },
  };

  try {
    // const response = await axios.request(options);
    // return response.data

    return filmByTitleDate
  } catch (error) {
    Snackbar.show({
      text: `Error ${error}`,
      duration: Snackbar.LENGTH_LONG,
    });

    return null;
  }
}
