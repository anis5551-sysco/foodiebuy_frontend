import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Loading from "./shared/Loading";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState(products);
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const catResponse = await axios.get("/categories");
      const response = await axios.get("/products/");
      if (componentMounted) {
        setCategories(catResponse.data);
        setProducts(response.data);
        setFilter(response.data);
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  const Empty = () => {
    return (
      <>
        <div className="card text-center m-5 p-5">
          <h1 className="card-title p-3"> No any products in this Category</h1>
        </div>
      </>
    );
  };

  const filterProducts = (cat) => {
    if(cat === null){
      setFilter(products);
      setEmpty(false);
    }else{
    const updatedList = products.filter((x) => x.categoryId === cat);
    if (updatedList.length > 0) {
      setEmpty(false);
      setFilter(updatedList);
    } else {
      setFilter(updatedList);
      setEmpty(true);
    }
  }
  };


  const ShowCategories = () => {
    return (
      <div className="buttons d-flex justify-content-center mb-2 pb-2">
        <button className="btn btn-outline-dark me-2" onClick={() => filterProducts(null)}>All</button>
        {categories.map((category) => {
          return (
            <div key={category.categoryId}>
              <button className="btn btn-outline-dark me-2 " onClick={() => filterProducts(category.categoryId)}>
                {category.categoryName}
              </button>
            </div>
          );
        })}
      </div>
    );
  };

  const ShowProducts = () => {
    return(
      filter.map((product) => {
        let image = "/products/"+product.imageUrl

        return (
            <div key={product.productId} className="col-md-3 mb-3">
              <div className="card  h-80 text-center p-3">
                <img
                  src={image}
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

      })
    );
  };

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Products</h1>
            <hr />
          </div>
          <ShowCategories />
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
            {empty ? <Empty /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
