import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': 'fdf144a132msh28bde3f8fa75f7bp150372jsnbdd59050d7e1',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  })

  return data;
}