export const GET_DATA = "GET_DATA";
export const ADD_DATA = "ADD_DATA";
export const REMOVE_DATA = "REMOVE_DATA";

export const getData = ()=>{
    return {
        type:GET_DATA,
    }
}

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