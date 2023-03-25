import React, { useState } from "react";
import "./Cart.css";
const Cart = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="d-flex justify-content-between">
      <button
        className="btn btn-primary w-50"
        onClick={() => {
          window.alert("You added " + props.name + " to cart");
        }}
      >
        {props.children}
      </button>
      <svg
        onClick={() => {
          setIsFavorite(!isFavorite);
          window.alert("You added " + props.name + " to favorite");
        }}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="256"
        height="256"
        viewBox="0 0 256 256"
        style={{ height: "50px", width: "50px" }}
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" stroke="white" />
            </feMerge>
          </filter>
        </defs>
        <g
          style={{
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "none",
            fillRule: "nonzero",
            opacity: 1,
            filter: !isFavorite ? "url(#glow)" : "none",
          }}
          transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
        >
          <path
            d="M 83.627 13.423 L 83.627 13.423 c -8.498 -8.498 -22.403 -8.498 -30.901 0 L 45 21.148 l -7.725 -7.725 c -8.498 -8.498 -22.403 -8.498 -30.901 0 s -8.498 22.403 0 30.901 l 13.247 13.247 c 0 0 0 0 0 0 L 45 82.951 l 25.379 -25.379 l 13.248 -13.248 C 92.124 35.826 92.124 21.921 83.627 13.423 z"
            style={{
              stroke: "none",
              strokeWidth: 1,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              fill: isFavorite ? "white" : "black",
              fillRule: "nonzero",
              opacity: 1,
            }}
            transform=" matrix(1 0 0 1 0 0) "
            stroke-linecap="round"
          />
        </g>
      </svg>
    </div>
  );
};

export default Cart;
