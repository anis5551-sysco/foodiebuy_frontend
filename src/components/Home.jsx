import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div class="d-flex justify-content-center">
          <div
            class="spinner-border"
            style={{ width: 75, height: 75 }}
            role="status"
          >
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </>
    );
  };

  const Empty = () => {
    return (
      <>
        <p>No products in this category</p>
      </>
    );
  };

  const filterProducts = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    if (updatedList.length > 0) {
      setEmpty(false);
      setFilter(updatedList);
    } else {
      setFilter(updatedList);
      setEmpty(true);
    }
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-2 pb-2">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("men's clothing")}
          >
            Meats
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("womens's clothing")}
          >
            Vegetables
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("jewelery")}
          >
            Dry Food
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("electronics")}
          >
            Cooked
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts(data)}
          >
            Chips
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-3">
                <div class="card  h-80 text-center p-3">
                  <img
                    src={product.image}
                    class="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div class="card-body">
                    <h5 class="card-title mb-0">
                      {product.title.substring(0, 15)}
                    </h5>
                    <p class="card-text">${product.price}</p>
                    <div>
                      <NavLink to={`/products/${product.id}`}>
                        <span class="btn btn-outline-dark">Buy</span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
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
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
            {empty ? <Empty /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
