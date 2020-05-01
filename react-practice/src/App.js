//import React, { useState } from 'react';
import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import styled from "styled-components";

const StyleButton = styled.button`
  background-color: ${(props) => (props.alt ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.alt ? "salmon" : "lightgreen")};
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: "asfa1", name: "Max", age: 28 },
      { id: "vasdf1", name: "Manu", age: 29 },
      { id: "asdf11", name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <StyleButton
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </StyleButton>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

/*
class App extends Component {

  state = {
    persons : [{name : "Suraj", age : 22},
    {name : "Sunny", age : 22},
    {name : "Suraj", age : 22}],
    otherState : "This is other state",
    showPersons : false
  }

  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  
  render() {

    const style = {
      backgroundColor : 'white',
      font : 'italic',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    }

  let persons = null;

  if(this.state.showPersons){
    persons = (
      <div>
            <Person name = {this.state.persons[0].name} age ={this.state.persons[0].age} >Hello</Person>
            <Person name = {this.state.persons[1].name} age ={this.state.persons[1].age} >Hello</Person>
            <Person name = {this.state.persons[2].name} age ={this.state.persons[2].age} >Hello</Person>
          </div>
    );  
  }

    return (
      <div className="App">
          <h1 className="App-title">Welcome to React</h1>
          <p>Working on React</p>
        <button 
        style = {style}
        onClick = {this.togglePersonsHandler}>Switch name</button>
        {persons}
      </div>
    );
  }
}

export default App;
*/

/*
class App extends Component {

  state = {
    persons : [{name : "Suraj", age : 22},
    {name : "Sunny", age : 22},
    {name : "Suraj", age : 22}],
    otherState : "This is other state",
    showPersons : false
  }

  switchNameHandler = () =>{
    //console.log('Was clicked!');
    this.setState({persons : [{name : "Sunny", age : 22},
    {name : "Sunny", age : 22},
    {name : "Suraj", age : 22}]})
  
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick = {this.switchNameHandler}>Switch name</button>
        <Person name = {this.state.persons[0].name} age ={this.state.persons[0].age} >Hello</Person>
        <Person name = {this.state.persons[1].name} age ={this.state.persons[1].age} >Hello</Person>
        <Person name = {this.state.persons[2].name} age ={this.state.persons[2].age} >Hello</Person>
      </div>
    );
  }
}

export default App;
*/

/*const app = props => {

  const [personState, setPersonsState] = useState({
    persons : [{name : "Suraj", age : 22},
    {name : "Sunny", age : 22},
    {name : "Suraj", age : 22}]
  });

  

  const switchNameHandler = () =>{
    //console.log('Was clicked!');
    setPersonsState({persons : [{name : "Sunny", age : 22},
    {name : "Sunny", age : 22},
    {name : "Suraj", age : 22}]})
  
  }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick = {switchNameHandler}>Switch name</button>
        <Person name = {personState.persons[0].name} age ={personState.persons[0].age} >Hello</Person>
        <Person name = {personState.persons[1].name} age ={personState.persons[1].age} >Hello</Person>
        <Person name = {personState.persons[2].name} age ={personState.persons[2].age} >Hello</Person>
      </div>
    );
  }

export default app;
*/
