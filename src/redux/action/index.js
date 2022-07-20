export const addCart =(product) =>{
    return{
        type: "ADDPRODUCT",
        payload:product

    }
}

export const removeCart =(product) =>{
    return{
        type: "DELETEPRODUCT",
        payload:product

    }
}