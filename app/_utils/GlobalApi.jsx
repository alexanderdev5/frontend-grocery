const { default:axios } = require("axios");

const axiosClient=axios.create({
    baseURL : 'http://192.168.56.1:1337/api'
})
{/** Hay dos formas de traer la data, en el primero "getCategory" estoy trayendo la data y mostrandolo en el frontend con 'useClient"
y en los demass estoy usando SSRendering, es decir los traigo mediante una promesa y los muestro  y ya no uso el 'use Client' */}

const getCategory=() => axiosClient.get('/categories?populate=*');
const getSliders=() => axiosClient.get('/sliders?populate=*').then(resp=>{
   
    return resp.data.data
})
const getCategoryList=() => axiosClient.get('/categories?populate=*').then(resp=>{
   
    return resp.data.data
})

const getAllProducts = () => axiosClient.get('/products?populate=*').then(resp => {
    return resp.data.data
})

export default {
    getCategory,
    getSliders,
    getCategoryList,
    getAllProducts
}