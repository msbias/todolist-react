import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.state = { value: '' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(event) {
    this.props.itemChanged(this.state.value);
    event.preventDefault();
    this.state.value = '';
  }

  handleClear() {
    this.props.clearItems(true);
  }

  render() {
    const item = this.props.item;
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Enter Item To Do: </label>
        <input
          id="add-item-input"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input id="add-button" type="submit" value="Add" />
        <button id="clear-button" onClick={this.handleClear}>
          Clear
        </button>
      </form>
    );
  }
}

export default Item;
