import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { addCart } from "../redux/action";
import axios from "axios";
import { useDispatch} from 'react-redux'
import Loading from "./shared/Loading";

const Product = () => {
  const { id } = useParams();

  const [currentProduct, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const addProductToCart = (product) => {
    dispatch(addCart(product, quantity));
  }

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await axios.get(`/products/${id}`);
      setProduct(response.data);
      const catResponse = await axios.get(`/categories/${response.data.categoryId}`);
      setCategory(catResponse.data);
      setLoading(false);
    };
    getProduct();
  }, []);

  const addQuantity = () =>{
    if(currentProduct.availableQuantity > quantity){
      setQuantity(quantity+1)
    }
  }

  const decreaseQuantity = () =>{
    if(quantity > 1){
      setQuantity(quantity-1)
    }
  }
  const ShowProduct = () => {
    const imgPath="/products/"+currentProduct.imageUrl;
    return (
      <>
        <div className="col-md-6">
          <img
            src={imgPath}
            alt={currentProduct.productName}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-8">
            {" "}
            {currentProduct.productName}
            <span>
              <h6 className="text-success">In Stock</h6>
            </span>
          </h1>
          <h5 className="text-black-50 text-uppercase">{category.categoryName}</h5>
          <h3 className="fw-bold">LKR {currentProduct.unitPrice}</h3>
          <p className="lead">{currentProduct.productDescription}</p>
          <div>
            <button className="btn btn-outline-dark ms-2 col-md-6" onClick={() => addProductToCart(currentProduct)}>
              Add to Cart
            </button>
            <button className="btn btn-dark ms-3 col-md-1" onClick={decreaseQuantity}>-</button>
            <label className="col-md-1 text-center ms-3 border border-dark-50 p-1 m-1">
              {quantity}
            </label>
            <button className="btn btn-dark col-md-1 ms-3" onClick={addQuantity}>+</button>
          </div>
          <button className="btn btn-outline-dark  mt-3 ms-2">
            View Cart
          </button>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
