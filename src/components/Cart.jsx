import { addCart, removeCart } from "../redux/action";
import { useDispatch, useSelector} from 'react-redux'

export default function Cart() {
  
  const cartProducts = useSelector((state) => state.handleCart);

  const dispatch = useDispatch();
  const addProductToCart = (currentProduct) => {
    dispatch(addCart(currentProduct));
  }
  const removeProductFromCart = (currentProduct) => {
    dispatch(removeCart(currentProduct));
  }

  const EmptyCart = () => {
    return (
      <>
        <div className="card text-center m-5 p-5">
          <h1 className="card-title p-3"> No any products in cart</h1>
        </div>
      </>
    );
  };

  const ShowCart = () =>{
    return(
      cartProducts.map((currentProduct) => {
        let image = "/products/"+currentProduct.imageUrl
      return(
      <>
      <div className="row d-flex justify-content-center">
        <div className="card mt-5 px-5 col-md-8">
          <div className="row g-7">
            <div className="col-md-3">
              <img src={image} className="img-fluid rounded-start" alt={currentProduct.productName} />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h3 className="card-title">{currentProduct.productName}</h3>
                <div className="row">
                  <div className="col-md-6">
                    <p className="card-text ">Quantity</p>
                  </div>
                  <div className="col-md-2 px-0 text-center">
                    <button className="btn btn-outline-dark" onClick={() => removeProductFromCart(currentProduct)}>-</button>
                  </div>
                  <div className="col-md-2 px-0 text-center">
                    <p className="card-text">{currentProduct.qty}/Kg</p>
                  </div>
                  <div className="col-md-2  px-0  text-center">
                  <button className="btn btn-outline-dark" onClick={() => addProductToCart(currentProduct)}>+</button>
                  </div>
                </div>
                <div className="row py-2">
                  <div className="col-md-6">
                    <p className="card-text">Price Per Unit</p>
                  </div>
                  <div className="col-md-6 text-center">
                    <p className="card-text">LKR. {currentProduct.unitPrice}</p>
                  </div>
                </div>

                <div className="row py-2">
                  <div className="col-md-6">
                    <h5 className="card-text">Total</h5>
                  </div>
                  <div className="col-md-6 text-center">
                    <h5 className="card-text">LKR. {currentProduct.unitPrice*currentProduct.qty}</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 text-center text-danger">
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>
        </div>
      </div>

      </>
      );

      })
    );
  }
  return (
    <div>
      {cartProducts.length === 0 ? <EmptyCart/> :<ShowCart/> }
    </div>
  );
}
