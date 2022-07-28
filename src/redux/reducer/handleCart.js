
const cart = [];
export default function handleCart(state = cart, action) {
    const product= action.payload;
    const quantity= action.quantity;
    switch (action.type){
        case "ADDPRODUCT":
            const exist = state.find((x) => x.productId === product.productId);
            if(exist){
                return state.map((x) =>
                x.productId === product.productId ? {...x, qty : x.qty + 1} : x
                );
            }else{
                return[
                    ...state,
                    {
                        ...product,
                        qty: quantity,
                    }
                ]
            }

        case "DELETEPRODUCT":
            const exist1 = state.find((x) => x.productId === product.productId);
            if(exist1.qty === 1){
                return state.filter((x) => x.id !== exist1.productId);
            }else{
                return state.map((x) =>
                    x.productId === product.productId ? {...x, qty : x.qty - 1 } : x
                );
            }

        default:
            return state;

    }
}
