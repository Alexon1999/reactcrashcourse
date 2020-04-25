// * class based component with es7
//! TODO:| rce |: for generate an class based component
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle() {
    // if (this.props.item.completed) {
    //   return {
    //     textDecoration: 'line-through',
    //   };
    // } else {
    //   return {
    //     textDecoration: 'none',
    //   };
    // }

    // ? Simplifier par ternary operators
    return {
      backgroundColor: '#999',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.item.completed ? 'line-through' : 'none',
    };
  }

  finishTask = (e) => {
    // arrow function , this refère à  la class TodoItem
    // ça non  finishTask(e){}

    console.log(this.props);
  };

  render() {
    const { id, title } = this.props.item;
    return (
      <div style={this.getStyle()}>
        <h3>
          {' '}
          {/* this.finishtask.bind(this) or arrow function (to take this of class)  */}
          <input
            type='checkbox'
            onChange={this.props.finishTask.bind(this, id)}
          />{' '}
          {title}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
            X
          </button>
        </h3>
      </div>
    );
  }
}

//* prop `item` of type `object`
TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
};

//* on peut mettre dans style
// const itemStyle = {
//   backgroundColor: '#f4f4f4',
// };

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 8px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
};

export default TodoItem;
