import React, { Component } from "react";
import Fruit from "./Fruit/Fruit";

class App extends Component {
  state = {
    inputValue: "",
    fruits: [],
  };

  onInputChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  deleteFruitHandler = (fruitIndex) => {
    const index = this.state.fruits.findIndex(
      (currentIndex) => currentIndex.key === fruitIndex
    );
    let fruits = [...this.state.fruits];
    fruits.splice(index, 1);
    this.setState({
      fruits: fruits,
    });
  };

  addItem(e) {
    e.preventDefault();
    let fruits = this.state.fruits;
    let data = this.state.inputValue.split("-");
    const fruitQuantity = {
      key: Math.floor(Math.random() * 30),
      name: data[0],
      quantity: data[1],
    };

    fruits.push(fruitQuantity);
    this.setState({
      inputValue: "",
      fruits: fruits,
    });
  }

  render() {
    const style = {
      border: "1px solid black",
      borderCollapse: "collapse",
    };

    let fruits = this.state.fruits.map((fruit) => {
      return (
        <table style={style} key={fruit.key}>
          <Fruit
            name={fruit.name}
            quantity={fruit.quantity}
            click={() => this.deleteFruitHandler(fruit.key)}
          />
        </table>
      );
    });

    return (
      <form>
        <input
          type="text"
          onChange={(event) => this.onInputChange(event)}
          value={this.state.inputValue}
        />
        <br />
        <button type="submit" onClick={(e) => this.addItem(e)}>
          SUBMIT
        </button>
        {fruits}
      </form>
    );
  }
}

export default App;
