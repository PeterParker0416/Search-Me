import React, { Component } from "react";
// CSS Link
import "./CardList.styles.css";
// Card component
import Card from "../Card/Card.component";

class CardList extends Component {
  render() {
    const { users } = this.props;

    return (
      <div id="card-list-container">
        {users.map((user) => {
          return <Card key={user.id} user={user} />;
        })}
      </div>
    );
  }
}

export default CardList;
