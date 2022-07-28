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