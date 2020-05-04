import React, { Component } from "react";
import Fruit from "./Fruit/Fruit";

class App extends Component {
  state = {
    count: 0,
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

    if (data[0] != "" && data[1] != "") {
      const fruitQuantity = {
        key: this.state.count + 1,
        name: data[0],
        quantity: data[1],
      };

      fruits.push(fruitQuantity);
      this.setState({
        count: this.state.count + 1,
        inputValue: "",
        fruits: fruits,
      });
    } else {
      alert("Values cannot be null and must be entered as shown in example");
    }
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
        <div>
          <input
            type="text"
            placeholder="Enter Fruit eg.abcd-10"
            onChange={(event) => this.onInputChange(event)}
            value={this.state.inputValue}
          />
          <br />
          <button type="submit" onClick={(e) => this.addItem(e)}>
            SUBMIT
          </button>
          {fruits}
        </div>
      </form>
    );
  }
}

export default App;
