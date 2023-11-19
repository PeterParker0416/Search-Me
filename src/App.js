import React, { Component } from 'react';
// CSS Link
import "./App.css";
// UD Components
import Search from "./components/Search/Search.component";
import CardList from "./components/Card-List/CardList.component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      searchField: ''
    }
  }

  usersApi = "https://jsonplaceholder.typicode.com/users";

  // lifecycle method
  componentDidMount() {
    fetch(this.usersApi)
      .then(res => res.json())
      .then(users => {
        this.setState({
          users: users
        });
      });
  }

  // on change listener
  onSearchFieldChange = (event) => {
    this.setState({
      searchField: event.target.value,
    })
  }

  render() {
    const { users, searchField } = this.state;

    //filtering users
    const filteredUsers = users.filter(user => {
      return user.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    });

    return (
      <div>
        <h1 id='header'>Search Me</h1>
        <Search searchField={searchField} onSearchFieldChange={this.onSearchFieldChange} />
        {
          users.length === 0 ? <h1>Loading...</h1> : <CardList users={filteredUsers} />
        }
      </div>
    );
  }
}

export default App;