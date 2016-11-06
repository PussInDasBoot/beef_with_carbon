import React, { Component, PropTypes } from 'react';
 
// Task component - represents a single todo item
export default class Beef extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: this.props.beef.name,
      quantity: "",
    };
  }

  handleChange(e) {
    this.setState({
      quantity: this.name.value,
    })
    this.props.updateQuantity(this.state);
  }

  render() {
    var name = this.state.name;
    return (
      <div className="product-row">
        <label className="beef-product" htmlFor="quantity">{name}</label>
        <input ref={(el) => {this.name = el}} id="quantity" type='text' placeholder='0' onChange={this.handleChange}></input>
      </div>
    );
  }
}
 
// Beef.propTypes = {
//   // This component gets the task to display through a React prop.
//   // We can use propTypes to indicate it is required
//   beef: PropTypes.object.isRequired,
// };