import React, { Component } from 'react';
import TodoItem from './TodoItem';

// * Class based component
class Todos extends Component {
  render() {
    // console.log(this.props.todos);
    //*map:  on va utiliser map qui va prendre un array et retourner un array

    return this.props.todos.map((todo) => (
      //+ Comme on utilise map , il faut mettre un Key sinon c 'est erreur
      <TodoItem key={todo.id} item={todo} />
    ));
  }
}

export default Todos;
