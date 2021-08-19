import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Item from './item.js';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: '', list: [] };
    this.itemChanged = this.itemChanged.bind(this);
    this.clearItems = this.clearItems.bind(this);
  }
  itemChanged(item) {
    if (item.length > 0) {
      let tempList = [];
      tempList = [...this.state.list];
      tempList.push(item);
      this.setState({ list: tempList });
    }
  }

  clearItems(clear) {
    if (clear) {
      this.setState({ list: [] });
    }
  }
  render() {
    const item = this.state.item;
    return (
      <div>
        <Item itemChanged={this.itemChanged} clearItems={this.clearItems} />
        <ul>
          {this.state.list.map(name => {
            return <li id="list-item"> {name} </li>;
          })}
        </ul>
      </div>
    );
  }
}

export default List;
