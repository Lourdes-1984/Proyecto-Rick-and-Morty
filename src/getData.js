import axios from 'axios';
const baseURL = 'https://rickandmortyapi.com/api'

export const getCaracter = async (id) => {
    const respuesta = await axios.get(`${baseURL}/character/${id}`)
    // const data = await respuesta.json()
    return respuesta;
}

export const getCaracteres = async (page) => {
    const respuesta = await axios(`${baseURL}/character/?page=${page}`);
    // const data = await respuesta.json()
    return respuesta;
}