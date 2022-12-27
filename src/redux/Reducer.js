import { GET_DATA, ADD_DATA, REMOVE_DATA } from "./actions";

const initialState = {
products:[
    {
        id:1,
        name:"Shirt1",
        description:"Good shirt",
        image:"https://images.pexels.com/photos/7621270/pexels-photo-7621270.jpeg?auto=compress&cs=tinysrgb&w=600",
        price:"22.33"
    },
    {
        id:2,
        name:"Shirt2",
        description:"Good shirt",
        image:"https://images.pexels.com/photos/10129710/pexels-photo-10129710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price:"22.33"
    },
    {
        id:3,
        name:"Shirt3",
        description:"Good shirt",
        image:"https://images.pexels.com/photos/4924650/pexels-photo-4924650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price:"22.33"
    },
    {
        id:4,
        name:"Shirt4",
        description:"Good shirt",
        image:"https://images.pexels.com/photos/9433782/pexels-photo-9433782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price:"22.33"
    },
],
carts:[]
}
function itemReducer(state=initialState,actions){
    switch (actions.type) {
        case GET_DATA:
            return state;
        case ADD_DATA:
            let add_item = state.products.find(item => {
                return item.id === actions.payload
              })
            let newArr = state.carts.filter(item=>item.id === add_item.id)
            let remove_arr = state.carts.filter(item=>item.id !== add_item.id)
      
            if(newArr.length !== 0){
                let new_item = newArr[0]
                let amount = new_item.amount + 1;
                let newprice = (parseFloat(add_item.price) * amount).toFixed(2)
                let increase_item = {
                    ...new_item,
                    amount,
                    price:newprice
                }

                let newc = [increase_item,...remove_arr]
                let sortedArr = newc.sort((a, b) => a.id - b.id);      
                return {products:[...state.products],carts:sortedArr}   
            }
            let new_item = {...add_item,amount:1}
            let newcarts = [...state.carts,new_item]
            let sortedArr1 = newcarts.sort((a, b) => a.id - b.id);      
            return {products:[...state.products],carts:sortedArr1} 
        case REMOVE_DATA:
            let curr_item = state.products.find(item => {
                return item.id === actions.payload
              })
            let r_arr = state.carts.filter(item=>item.id === actions.payload)
            let r_carts = state.carts.filter(item=>item.id !== actions.payload)
            if(r_arr[0].amount <= 1){
                let sortedArr2 = r_carts.sort((a, b) => a.id - b.id); 
                return {products:[...state.products],carts:sortedArr2} 
            }
            let amount = r_arr[0].amount - 1;
            let price = (parseFloat(curr_item.price) * amount).toFixed(2)
            let re_item = {...r_arr[0],amount,price};
            let re_carts = [...r_carts,re_item]
            let sortedArr3 = re_carts.sort((a, b) => a.id - b.id); 
            return {products:[...state.products],carts:sortedArr3} 
        default:
            return state;
    }
}

export default itemReducer