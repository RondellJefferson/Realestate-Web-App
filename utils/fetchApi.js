import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': 'f86c78d276mshdb6f81a5f21254bp165162jsne79e7ba66f28'
    },
  });
    
  return data;
}