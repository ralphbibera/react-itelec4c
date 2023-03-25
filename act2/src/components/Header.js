import React from "react";
import "./Header.css";
import wave from "../assets/wave.png";
const Header = () => {
  return (
    <div className="div-header">
      <h1 className="text-light pt-5 pb-3">NFT Black Market</h1>
      <img src={wave} style={{ width: "100%" }} alt={"wave"} />
    </div>
  );
};

export default Header;
