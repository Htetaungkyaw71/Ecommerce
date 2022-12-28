import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const GET_DATA = "GET_DATA";
export const ADD_DATA = "ADD_DATA";
export const REMOVE_DATA = "REMOVE_DATA";



// const options = {
//   method: 'GET',
//   url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list',
//   params: {
//     country: 'us',
//     lang: 'en',
//     currentpage: '0',
//     pagesize: '30',
//     categories: 'man_all',
//     concepts: 'H&M MAN'
//   },
//   headers: {
//     'X-RapidAPI-Key': '3620fe1321mshc266a8afae118a6p1c032djsn9475d8691535',
//     'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
//   }
// };



const options = {
  method: 'GET',
  url: 'https://asos2.p.rapidapi.com/products/v2/list',
  params: {
    store: 'US',
    offset: '0',
    categoryId: '4209',
    limit: '30',
    country: 'US',
    sort: 'freshness',
    currency: 'USD',
    sizeSchema: 'US',
    lang: 'en-US'
  },
  headers: {
    'X-RapidAPI-Key': '3620fe1321mshc266a8afae118a6p1c032djsn9475d8691535',
    'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
  }
};







export const getData = createAsyncThunk(GET_DATA, async()=>{
    try {
        console.log("called")
        const response = await axios.get('https://asos2.p.rapidapi.com/products/v2/list',options);
        const products = response.data.products;
        let items = [];
        for(let product of products){
            let obj = {
                id:product.id,
                name:product.name,
                brand:product.brandName,
                image:`https://${product.imageUrl}`,
                price:product.price.current.value
            }
            items.push(obj)
        }
        return items
      } catch (error) {
        console.error(error);
      }
    
})  

export const addCart = (id)=>{
    return {
        type:ADD_DATA,
        payload:id
    }
}

export const removeCart = (id)=>{
    return {
        type:REMOVE_DATA,
        payload:id
    }
}