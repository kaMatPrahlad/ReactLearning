import React from "react";
import nature from "../asset/images/nature.png.avif";
import "../components/UserCard.css";

const UserCard = () => {
  return (
    <div className="user-container">
      <p id="title">Prahlad Kamat</p>
      <img id="user-img" src={nature} alt="img" />
      <p id="user-desc">Description of Prahlad kamat</p>
    </div>
  );
};

export default UserCard;
