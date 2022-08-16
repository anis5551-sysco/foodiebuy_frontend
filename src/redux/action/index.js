import axios from "axios"

export const addCart =(product ,quantity) =>{
    return{
        type: "ADDPRODUCT",
        payload:product,quantity
    }
}

export const removeCart =(product) =>{
    return{
        type: "DELETEPRODUCT",
        payload:product
    }
}

export const loginStart =(tokens, email) =>{
    const currentUser = axios({
        method: "get",
        url: `/customers/${email}`,
        data:{} ,
        headers: {
        },
      });
      console.log(currentUser);
    return{
        type: "LOGIN",
        payload:tokens,currentUser
    }
    
}

export const logout =(logout) =>{
    return{
        type: "LOGOUT",
        payload:logout
    }
}