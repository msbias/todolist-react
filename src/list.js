import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Item from './item.js';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: '', list: [] };
    this.itemChanged = this.itemChanged.bind(this);
  }
  itemChanged(item) {
    console.log(item);
    if (item.length > 0) {
      let tempList = [];
      tempList = [...this.state.list];
      tempList.push(item);
      this.setState({ list: tempList });
    }
  }
  render() {
    const item = this.state.item;
    return (
      <div>
        <Item itemChanged={this.itemChanged} />
        <h5> List </h5>
        <ul>
          {this.state.list.map(name => {
            return <li> {name} </li>;
          })}
        </ul>
      </div>
    );
  }
}

export default List;
