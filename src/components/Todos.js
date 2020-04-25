import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

// * Class based component
class Todos extends Component {
  // finishTask = () => {
  //   console.log('Hello');
  // };

  render() {
    // console.log(this.props.todos);
    //*map:  on va utiliser map qui va prendre un array et retourner un array
    return this.props.todos.map((todo) => (
      //+ Comme on utilise map , il faut mettre un Key sinon c 'est erreur
      <TodoItem
        key={todo.id}
        finishTask={this.props.finishTask}
        delTodo={this.props.delTodo}
        item={todo}
      />
    ));
  }
}

// + PropTypes exports a range of validators that can be used to make sure the data you receive is valid , example: todos (props) --> class Todos
// * Proptypes is required , ca analyse votre props(propriété) et ici on reçoit todos(props) de app.js , si ce n'est pas un array , il donne message d'erreur
// ! Warning: Failed prop type: The prop `item` is marked as required in `Todos`
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};
export default Todos;
