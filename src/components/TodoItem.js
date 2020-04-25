//! TODO:| rce |: for generate an class based component with es7
import React, { Component } from 'react';

export class TodoItem extends Component {
  render() {
    const item = this.props.item;
    return (
      <div>
        <h3>{item.title}</h3>
      </div>
    );
  }
}

export default TodoItem;
