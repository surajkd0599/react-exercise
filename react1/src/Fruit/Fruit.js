import React from "react";
import "./Fruit.css";

const fruit = (props) => {
  return (
    <tbody>
      <tr>
        <td> {props.name} </td>
        <td> {props.quantity} </td>
        <td onClick={props.click}>
          delete
        </td>
      </tr>
    </tbody>
  );
};

export default fruit;
