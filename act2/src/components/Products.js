import React from "react";
import Cart from "./Cart";
import "./Products.css";
const Products = (props) => {
  const products = props.products;

  return (
    <div>
      <ul className="d-flex justify-content-center product-list">
        {products.map((product) => (
          <li className="card m-2 p-3 mx-3 mb-5">
            <h3>{product.name}</h3>
            <img
              className="border img-product"
              src={product.image}
              alt={product.name}
              style={{ width: "100%" }}
            />
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <Cart name={product.name}>Add To Cart</Cart>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
