import React, { Component, PropTypes } from 'react';
import {createContainer} from 'meteor/react-meteor-data';
 
import { Beef_products } from '../api/beef.js';

import Beef from './Beef.jsx';
import Carbon from './Carbon.jsx';
 
// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carbonThisWeek: "",
    };
  }
 
  renderBeef() {
    this.props.beef.map((beef) => (
      console.log(beef)
    ));
    return this.props.beef.map((beef) => (
      <Beef key={beef._id} beef={beef} updateQuantity={this.updateQuantity}/>
    ));
  }

  handleFormSubmit(e) {
    e.preventDefault();
  }

  updateQuantity(quantity) {
    console.log("success");
  }
 
  render() {
    return (
      <div>
        <div className="quantity">
          <header>
            <h1>Beef consumed this week</h1>
          </header>

          <p>How much beef we consume has a large impact on our carbon footprint. Submit the quantities of each beef product you consumed in the last week to calculate your carbon footprint for last week.</p>
   
          <form onSubmit={this.handleFormSubmit}>
            {this.renderBeef()}
            <input type="submit"></input>
          </form>
        </div>
        <div className="carbon">
          <Carbon />
        </div>
        </div>
    );
  }
}

// App.propTypes = {
//   beef: PropTypes.array.isRequired,
// };
 
export default createContainer(() => {
  return {
    beef: Beef_products.find({}).fetch(),
  };
}, App);
