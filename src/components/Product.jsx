import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { addCart } from "../redux/action";
import {useSelector, useDispatch} from 'react-redux'

const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProductToCart = (product) => {
    dispatch(addCart(product));
  }

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      console.log(id);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div class="d-flex justify-content-center">
          <div class="spinner-border" style={{width: 75, height: 75}} role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </>
    );
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-8">
            {" "}
            {product.title}
            <span>
              <h6 className="text-success">In Stock</h6>
            </span>
          </h1>
          <h5 className="text-black-50 text-uppercase">{product.category}</h5>
          <h3 className="fw-bold">LKR {product.price}</h3>
          <p className="lead">{product.description}</p>
          <div>
            <button className="btn btn-outline-dark ms-2 col-md-6" onClick={() => addProductToCart(product)}>
              {" "}
              Add to Cart
            </button>
            <button className="btn btn-dark ms-3 col-md-1">-</button>
            <label className="col-md-1 text-center ms-3 border border-dark-50 p-1 m-1">
              0
            </label>
            <button className="btn btn-dark col-md-1 ms-3">+</button>
          </div>
          <button className="btn btn-outline-dark  mt-3 ms-2">
            {" "}
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
