import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  // * ici on va enregistrer ttout ce qu'on va mettre dans les input dans state
  state = {
    title: '',
  };

  // * Component level state and App Level state(Redux , Context or Graphql)
  //+ on utilise component state pas comme avec todo ou on devait partager le state entre differents components , apps -> Todos -> TodoItems

  // onChange = (e) => this.setState({ title : e.target.value });
  //* Si on a pas que title dans state , on va faire comme ceci
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();

    //*  addTodo vient de Apps.js , nous on passe le title quand on clique sur submit
    this.props.addTodo(this.state.title);

    this.setState({ title: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type='text'
          name='title'
          style={{ flex: '10', padding: '5px' }}
          placeholder='Add Todo ...'
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type='submit'
          value='Submit'
          className='btn'
          style={{ flex: '1' }}
        />
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
