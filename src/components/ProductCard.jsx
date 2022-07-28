import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function ProductCard() {
    const [products, setProducts] = useState([]);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("/products/");
      if (componentMounted) {
        setProducts(response.data);
      }
    };
    getProducts();
  }, []);
    const ShowProducts = () => {
          products.map((product) => {
            return (
                <div className="col-md-3 mb-3" key={product.productId}>
                  <div className="card  h-80 text-center p-3">
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.productName}
                      height="250px"
                    />
                    <div className="card-body">
                      <h5 className="card-title mb-0">
                        {product.productName.substring(0, 15)}
                      </h5>
                      <p className="card-text">${product.unitPrice}</p>
                      <div>
                        <NavLink to={`/products/${product.productId}`}>
                          <span className="btn btn-outline-dark">Buy</span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
            );
          });
      };
  return (
    <div>
        <ShowProducts/>
    </div>
  )
}
