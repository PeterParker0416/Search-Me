import React, { Component } from "react";
// CSS Link
import "./Card.styles.css";

class Card extends Component {
  render() {
    const { name, email, id } = this.props.user;
    const imageUrl = `https://robohash.org/${id}?set=set2&size=200x200`;

    return (
      <div className="card-container">
        <img className="img-container" src={imageUrl} alt="" />
        <p className="info">{name}</p>
        <p className="info">{email}</p>
      </div>
    );
  }
}

export default Card;
