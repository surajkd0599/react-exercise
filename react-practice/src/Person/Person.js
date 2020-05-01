import React from "react";
import styled from "styled-components";

//import './Person.css';

const StyleDiv = styled.div`
  background-color: skyblue;
  padding: 8px;
  border: 1px solid black;
  margin-left: 400px;
  margin-right: 400px;
  margin-top: 5px;
  text-align: center;

  @media (min-width: 500px) : {
    width: 450px;
  }
`;

const person = (props) => {
  return (
    <StyleDiv className="Person">
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyleDiv>
  );
};

export default person;
