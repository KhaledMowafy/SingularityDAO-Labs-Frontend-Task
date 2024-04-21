import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const readAll = async (path='') => {
    
        try {
            const authAxios = axios.create({
                headers: {
                    'Accept': 'application/json',
                }
            })
            const response = await authAxios.get(`${BASE_URL}${path}`)
            return response.data.results;
        } catch (err) {
            return err;
        }
    
  }
  
  export const read = async (path='') => {
    
    try {
        const authAxios = axios.create({
            headers: {
                'Accept': 'application/json',
            }
        })
        const response = await authAxios.get(`${BASE_URL}${path}`)
        return response.data;
    } catch (err) {
        return err;
    }

}
 